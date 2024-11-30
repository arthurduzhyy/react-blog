import { ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, CardFooter, IconButton, Typography } from '@material-tailwind/react'
import { FC, memo } from 'react'
import { substring } from '../../../../lib/text'
import { formatRelativeTime } from '../../../../lib/time'
import { Post } from '../../service/types'

interface ContentItemCardProps {
  post: Post
}

const ContentItemCardComponent: FC<ContentItemCardProps> = ({ post }) => {
  return <Card className="rounded-lg shadow-lg border border-gray-300 my-4 dark:bg-gray-900 dark:text-white">
    <div className="flex items-center px-4 py-2 border-b border-gray-300 dark:border-gray-700">
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="h-10 w-10 rounded-full mr-3"
      />
      <div>
        <Typography variant="small" className="font-semibold text-gray-900 dark:text-white">
          {post.user.firstName} {post.user.lastName}
        </Typography>
        <Typography variant="small" className="text-gray-600 dark:text-gray-400 text-xs">
          {formatRelativeTime(post.createdAt)}
        </Typography>
      </div>
    </div>

    <CardBody className="p-4">
      <Typography variant="paragraph" className="text-gray-800 dark:text-gray-200">
        {post.body}
      </Typography>
      <img
        src={post.images[0].url}
        alt={substring(post.body)}
        className="w-full rounded-lg mt-2"
      />
    </CardBody>

    <CardFooter>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <IconButton
            size="sm"
            className="bg-transparent shadow-none hover:shadow-none text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-700 dark:hover:text-red-500"
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>

          <IconButton
            size="sm"
            className="bg-transparent shadow-none hover:shadow-none text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </CardFooter>
  </Card>
}

const ContentItemCard = memo(ContentItemCardComponent)

export default ContentItemCard