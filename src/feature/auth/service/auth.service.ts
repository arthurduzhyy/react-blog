import HttpClient from '../../../lib/http'
import { LoginForm, LoginResponse, RegisterForm } from './types'

class AuthService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  public async login(data: LoginForm) {
    // Although TypeScript indicates that data is not compatible with BodyInit,
    // the request method in HttpClient will automatically convert the object to JSON
    // using JSON.stringify, so it works correctly.
    const response = await this.httpClient.post<LoginResponse>('/users/login', {
      body: data
    })
    this.httpClient.setToken(response.token)
    return response
  }

  public async register(data: RegisterForm) {
    return await this.httpClient.post('/users/register', {
      body: data
    })
  }

  public logout() {
    this.httpClient.setToken(undefined)
  }
}

export default AuthService