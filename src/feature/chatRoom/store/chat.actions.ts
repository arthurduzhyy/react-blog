// src/feature/chatRoom/store/chat.actions.ts
import { Chat } from '../service/types'

type ChatPayloadTypes = Chat | Chat[]

export interface ChatAction {
  type: ChatActionTypes
  payload: ChatPayloadTypes
}

export enum ChatActionTypes {
  SET_CHATS = 'SET_CHATS',
  SET_CURRENT_CHAT = 'SET_CURRENT_CHAT'
}

export const setChatsAction = (chats: Chat[]): ChatAction => ({
  type: ChatActionTypes.SET_CHATS,
  payload: chats
})

export const setCurrentChatAction = (chat: Chat): ChatAction => ({
  type: ChatActionTypes.SET_CURRENT_CHAT,
  payload: chat
})