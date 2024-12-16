import HttpClient from '../../../lib/http'
import { EmailUserUpdate } from './types'

export class userSettingsService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  public async updateEmail(email: EmailUserUpdate) {
    console.log(email)
    return  await this.httpClient.put('/users/update-email', {
      body: email
    })
  }
}