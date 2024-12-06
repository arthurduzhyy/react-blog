// src/feature/chatRoom/store/chat.reducer.ts
import { Chat } from '../service/types'
import { ChatAction, ChatActionTypes } from './chat.actions'

interface ChatState {
  chatList: Chat[],
  currentChat: Chat | null
}

export const initialState: ChatState = {
  chatList: [],
  currentChat: null
}

export const chatReducer = (state: ChatState = initialState, action: ChatAction): ChatState => {
  switch (action.type) {
    case ChatActionTypes.SET_CHATS:
      return {
        ...state,
        chatList: action.payload as Chat[]
      }
    case ChatActionTypes.SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: action.payload as Chat
      }
    default:
      return state
  }
}