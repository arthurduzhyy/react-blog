import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import usePosts from '../../../home/hook/usePosts'
import useUser from '../../hook/useUser'
import ProfileInfoTab from './ProfileInfoTab'
import ProfilePostsTab from './ProfilePostsTab'

const data = [
  { label: 'Posts', value: 'posts' },
  { label: 'Information', value: 'info' },
  { label: 'Readers', value: 'readers' },
  { label: 'Subscriptions', value: 'subscriptions' }
]

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState('posts')
  const { user } = useUser()
  const { userPosts, getUserPosts } = usePosts()

  useEffect(() => {
    if (activeTab === 'posts' && user?.userId) {
      getUserPosts(user?.userId)
    }
  }, [activeTab, getUserPosts, user?.userId])

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
      <ProfileInfoTab user={user!} />

      <ProfilePostsTab posts={userPosts} />
    </TabsBody>
  </Tabs>
}

export default ProfileTab