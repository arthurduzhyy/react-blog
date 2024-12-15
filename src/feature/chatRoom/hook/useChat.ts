// src/feature/chatRoom/hook/useChat.ts
import { useCallback, useEffect, useReducer, useState } from 'react'
import { ChatService } from '../service/chatService'
import SignalRService from '../service/signalRService'
import { setChatsAction, setCurrentChatAction } from '../store/chat.actions'
import { chatReducer, initialState } from '../store/chat.reducer'

export const useChat = () => {
  const [state, dispatch] = useReducer(chatReducer, initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const chatService = new ChatService()
  const signalRService = new SignalRService()

  const load = useCallback(async () => {
    setLoading(true)

    try {
      const response = await chatService.getByUser()
      dispatch(setChatsAction(response))
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }, [chatService])




  const connectToChat = useCallback(async (chatId: string) => {
    setLoading(true)
    try {
      const chat = await signalRService.joinChat(chatId)
      if (chat) {
        console.log(chat)
        dispatch(setCurrentChatAction(chat))
      }
    } catch (err) {
      console.error('Error connecting to chat:', err)
    }
    finally {
        setLoading(false)
    }
  }, [signalRService])

  useEffect(() => {
    load()
  }, [load])

  return {
    chats: state.chatList,
    currentChat: state.currentChat,
    loading,
    error,
    load,
    connectToChat
  }
}