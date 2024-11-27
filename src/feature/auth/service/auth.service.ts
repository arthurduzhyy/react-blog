import HttpClient from '../../../lib/http'
import { LoginForm, LoginResponse, RegisterForm } from './types'

class AuthService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  public async login(data: LoginForm): Promise<LoginResponse | null> {
    try {
      const response = await this.httpClient.post<LoginResponse>('/users/login', {
        body: JSON.stringify(data)
      })
      this.httpClient.setToken(response.token)
      return response
    } catch (e) {
      console.error('Error during login:', e)
      return null
    }
  }

  public async register(data: RegisterForm): Promise<boolean> {
    try {
      await this.httpClient.post('/users/register', {
        body: JSON.stringify(data)
      })
      return true
    } catch (error) {
      console.error('Error during registration:', error)
      return false
    }
  }

  public logout() {
    this.httpClient.setToken(undefined)
  }
}

export default AuthService