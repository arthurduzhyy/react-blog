import { useEffect } from 'react'
import LoadingSpinner from '../../../../component/LoadingSpinner'
import { EVENT_POSTS_UPDATE, EventBus } from '../../../../lib/eventbus'
import usePosts from '../../hook/usePosts'
import ContentItemCard from './ContentItemCard'

const ContentCard = () => {
  const { posts, loading, load } = usePosts()

  useEffect(() => {
    EventBus.on(EVENT_POSTS_UPDATE, () => load())
  }, [posts])

  return <div className="flex flex-col rounded-lg">
    <LoadingSpinner loading={posts.length === 0 && loading}>
      {posts.map(p => <ContentItemCard
        key={p.id}
        post={p}
      />)}
    </LoadingSpinner>
  </div>
}

export default ContentCard