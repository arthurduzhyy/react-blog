import { ListItem, Typography } from '@material-tailwind/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../../lib/time'
import { Chat } from '../service/types'

interface ChatCardProps  {
  chat: Chat
}
export const ChatCard: FC<ChatCardProps>  = ({chat}) => {
  const lastMessage = chat.messages[chat.messages.length - 1]
  const navigate = useNavigate()

  return  <ListItem onClick={() => navigate(`/chat/${chat.id}`)}
    className="dark:bg-gray-800 dark:text-white h-16">
    <div className="w-[100%]">
      <Typography variant="h5">
        {chat.name}
      </Typography>
      <div className="flex justify-between w-100 mt-2 mb-1">
        <div className="flex">
          <Typography variant="small"  className="font-bold pr-2 text-gray-100">
            {lastMessage.author.username}:
          </Typography>
          <Typography variant="small" className="font-normal">
            {lastMessage.content.trim()}
          </Typography>
        </div>
        <Typography variant="small" className="font-normal">
          {formatDate(lastMessage.createdAt)}
        </Typography>
      </div>
    </div>
  </ListItem>
}

export default ChatCard