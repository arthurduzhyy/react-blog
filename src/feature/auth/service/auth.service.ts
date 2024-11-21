import HttpClient from '../../../lib/http'
import { LoginForm, RegisterForm } from './types'

class AuthService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  public async login(data: LoginForm): Promise<Response> {
    try {
      console.log(data)
      const response = await this.httpClient.post('/users/login', {
        body: JSON.stringify(data)
      })
      console.log(JSON.stringify(data))
      if (!response.ok) {
        throw new Error('Login failed')
      }
      const result = await response.json()
      this.httpClient.setToken(result.token)
      return response
    } catch (error) {
      console.error('Error during login:', error)
      throw error
    }
  }

  public async register(data: RegisterForm): Promise<Response> {
    try {
      const response = await this.httpClient.post('/users/register', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error('Registration failed')
      }
      return response
    } catch (error) {
      console.error('Error during registration:', error)
      throw error
    }
  }
}

export default AuthService