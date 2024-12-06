import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'
import { Chat } from './types'

class SignalRService {
  private accessToken: string = localStorage.getItem('access_token') || ''
  private connection: HubConnection

  constructor() {
    this.connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5079/chatHub', {
        accessTokenFactory: () => this.accessToken
      })
      .withAutomaticReconnect()
      .build()

    this.connection.on('ConnectedToChat', (chat: Chat) => {
      console.log('Connected to chat:', chat)
      localStorage.setItem('current_chat', JSON.stringify(chat))
    })

    this.connection.on('ConnectionToChatFailed', (error) => {
      console.error('Connection to chat failed:', error)
    })

    this.connection.start()
      .then(() => console.log('SignalR connection established'))
      .catch(err => console.error('SignalR connection error:', err))
  }


}

export default SignalRService