interface RequestInitOptions extends Omit<RequestInit, 'headers'> {
  headers?: Record<string, string>
}

class HttpClient {
  private accessToken: string = localStorage.getItem('access_token') || ''

  public setToken(token?: string): void {
    this.accessToken = token || ''
    if (token) {
      localStorage.setItem('access_token', token)
    } else {
      localStorage.removeItem('access_token')
    }
  }

  public getToken(): string {
    return this.accessToken
  }

  public get<T>(path: string, options: RequestInitOptions = {}): Promise<T> {
    return this.request<T>(path, options)
  }

  public post<T>(path: string, options: RequestInitOptions = {}): Promise<T> {
    return this.request<T>(path, { ...options, method: 'POST' })
  }

  public put<T>(path: string, options: RequestInitOptions = {}): Promise<T> {
    return this.request<T>(path, { ...options, method: 'PUT' })
  }

  public delete<T>(path: string, options: RequestInitOptions = {}): Promise<T> {
    return this.request<T>(path, { ...options, method: 'DELETE' })
  }

  private async request<T>(path: string, options: RequestInitOptions = {}): Promise<T> {
    if (this.accessToken) {
      this.setHeader(options, 'Authorization', 'Bearer ' + this.accessToken)
    }

    this.setHeader(options, 'Accept', 'application/json')

    if (this.isObject(options.body) && !(options.body instanceof FormData)) {
      this.setHeader(options, 'Content-Type', 'application/json')
    }

    const url = import.meta.env.VITE_API_URL + path
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return response.json()
  }

  private setHeader(options: RequestInitOptions, header: string, value: string): void {
    options.headers = { ...(options.headers || {}), [header]: value }
  }

  // https://stackoverflow.com/a/8511350/6620659
  private isObject(x: unknown): boolean {
    return typeof x === 'object'
      && !Array.isArray(x)
      && x !== null
  }
}

export default HttpClient