import HttpClient from '../../../lib/http'
import { parseJwt } from '../../../lib/jwt'
import { User } from './types'

class UserService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  public getProfile(): User | null {
    return this.parsedUser(this.httpClient.getToken())
  }

  private parsedUser = (token: string): User | null => {
    const parsedToken = parseJwt(token)
    if (!parsedToken) return null

    return {
      userId: parsedToken.sub,
      firstName: parsedToken.given_name,
      lastName: parsedToken.family_name,
      userName: parsedToken.unique_name,
      email: parsedToken.email,
      profilePicture: parsedToken.profilePicture,
      gender: parsedToken.gend,
      createdAt: parsedToken.regTi
    }
  }
}

export default UserService