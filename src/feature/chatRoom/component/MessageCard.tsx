import { Avatar, ListItemPrefix, Typography } from '@material-tailwind/react'
import { FC } from 'react'
import { formatTime } from '../../../lib/time'
import { ChatMessage } from '../service/types'

interface MessageCardProps {
  message: ChatMessage
  isCurrentUser: boolean
}

const MessageCard: FC<MessageCardProps> = ({ message, isCurrentUser }) => {
  return (
    <div className={`flex items-center w-5/12 p-2 rounded-lg text-start leading-tight transition-all
      ${isCurrentUser ? 'bg-blue-200 dark:bg-blue-700 ml-auto' : 'bg-gray-200 dark:bg-gray-700 mr-auto'}
      border-gray-800 dark:border-gray-500 shadow-lg`}>
      <ListItemPrefix className="w-16">
        <Avatar variant="circular" alt={message.author.firstName} src="https://docs.material-tailwind.com/img/face-1.jpg" />
      </ListItemPrefix>
      <div className="w-[100%]">
        <Typography variant="h6">
          {message.author.firstName} {message.author.lastName}
        </Typography>
        <div className="flex justify-between w-100 mt-2 mb-1">
          <div className="flex">
            <Typography variant="small" className="font-normal">
              {message.content}
            </Typography>
          </div>
          <Typography variant="small" className="font-normal">
            {formatTime(message.createdAt)}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default MessageCard