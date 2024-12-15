import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import usePosts from '../../../home/hook/usePosts'
import { useReaders } from '../../hook/useReaders'
import UserService from '../../service/user.service'
import ProfileInfoTab from './ProfileInfoTab'
import ProfilePostsTab from './ProfilePostsTab'
import ProfileReadersTab from './ProfileReadersTab'

const data = [
  { label: 'Posts', value: 'posts' },
  { label: 'Information', value: 'info' },
  { label: 'Readers', value: 'readers' },
  { label: 'Subscriptions', value: 'subscriptions' }
]

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState('posts')
  const userService = new UserService()
  const user = userService.getProfile()
  const readers = useReaders()
  const { posts, loading: postsLoading, error: postsError, getUserPosts } = usePosts()

  useEffect(() => {
    if (activeTab === 'posts' && user.id) {
      getUserPosts(user.id)
    }
  }, [activeTab, getUserPosts, user.id])

  return <Tabs value={activeTab}>
    <TabsHeader className="overflow-x-auto sm:overflow-visible">
      {data.map(({ label, value }) => (
        <Tab
          key={value}
          value={value}
          onClick={() => setActiveTab(value)}
          className="text-sm sm:text-base"
        >
          {label}
        </Tab>
      ))}
    </TabsHeader>

    <TabsBody>
      <ProfileInfoTab user={user} />
      {activeTab === 'posts' && (
        <ProfilePostsTab
          posts={posts}
          loading={postsLoading}
          error={postsError}
        />
      )}
    </TabsBody>
  </Tabs>
}

export default ProfileTab