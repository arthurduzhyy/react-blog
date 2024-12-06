import HttpClient from '../../../lib/http'
import { Chat } from './types'

export class ChatService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  public async getByUser() {
    return await this.httpClient.get<Array<Chat>>('/chat/getByUser')
  }

}