import { User } from '../../profile/service/types'

export interface Chat {
  id: string,
  name: string,
  messages: ChatMessage[]
  users: User[]
}

export interface ChatMessage {
  id: string,
  content: string,
  author: User
  chatId: string,
  createdAt: string
}