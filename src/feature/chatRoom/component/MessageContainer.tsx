// src/feature/chatRoom/component/MessageContainer.tsx
import { FC } from 'react'
import { Chat } from '../service/types'
import MessageCard from './MessageCard'

interface MessageContainerProps {
  chat: Chat
}

const MessageContainer: FC<MessageContainerProps> = ({ chat }) => {
  return (
    <div>
      {chat.messages.map(message => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessageContainer