import { List } from '@material-tailwind/react'
import { useEffect } from 'react'
import LoadingSpinner from '../../../component/LoadingSpinner'
import useTitle from '../../../hook/useTitle'
import { EVENT_POSTS_UPDATE, EventBus } from '../../../lib/eventbus'
import ChatCard from '../component/ChatCard'
import { useChat } from '../hook/useChat'


const ChatInbox = () => {
  useTitle('Chat Inbox')
  const { chats, loading, load } = useChat()

  useEffect(() => {
    EventBus.on(EVENT_POSTS_UPDATE, () => load())
  }, [chats])
  return <div className="max-w-full sm:max-w-4xl mx-auto p-4">
    <LoadingSpinner loading={chats.length === 0 && loading}>
      <List>
        {chats.map(chat => <ChatCard
          chat={chat}
          key={chat.id} />)}
      </List>
    </LoadingSpinner>
  </div>
}

export default ChatInbox