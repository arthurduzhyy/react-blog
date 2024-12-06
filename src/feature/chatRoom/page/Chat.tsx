import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../../component/LoadingSpinner'
import signalRService from '../service/signalRService'

export const Chat = () => {
  const { id } = useParams<{ id: string }>()
  const signalR = new signalRService()
  const [currentChat, setCurrentChat] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChat = async () => {
      const chat = await signalR.joinChat(id)
      setCurrentChat(chat)
      setLoading(false)
    }
    fetchChat()
  }, [id])

  return (
    <div className="max-w-full sm:max-w-4xl mx-auto p-4">
      <LoadingSpinner loading={!currentChat && loading}>
        {currentChat && <h1>{currentChat.name}</h1>}
        {/*<MessageContainer chat={currentChat} />*/}
      </LoadingSpinner>
    </div>
  )
}