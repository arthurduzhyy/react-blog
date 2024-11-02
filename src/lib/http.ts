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

  public get(path: string, options: RequestInitOptions = {}): Promise<Response> {
    return this.request(path, options)
  }

  public post(path: string, options: RequestInitOptions = {}): Promise<Response> {
    return this.request(path, { ...options, method: 'POST' })
  }

  public put(path: string, options: RequestInitOptions = {}): Promise<Response> {
    return this.request(path, { ...options, method: 'PUT' })
  }

  public delete(path: string, options: RequestInitOptions = {}): Promise<Response> {
    return this.request(path, { ...options, method: 'DELETE' })
  }

  private request(path: string, options: RequestInitOptions = {}): Promise<Response> {
    if (this.accessToken) {
      this.setHeader(options, 'Authorization', 'Bearer ' + this.accessToken)
    }

    this.setHeader(options, 'Accept', 'application/json')

    if (this.isObject(options.body) || !(options.body instanceof FormData)) {
      this.setHeader(options, 'Content-Type', 'application/json')
      options.body = JSON.stringify(options.body)
    }

    const url = import.meta.env.VITE_API_URL + path
    return fetch(url, options)
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