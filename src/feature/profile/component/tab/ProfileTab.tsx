import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { useState } from 'react'
import UserService from '../../service/user.service'
import ProfileInfoTab from './ProfileInfoTab'

const data = [
  { label: 'Posts', value: 'posts' },
  { label: 'Information', value: 'info' },
  { label: 'Subscriptions', value: 'subscriptions' },
  { label: 'Subscribers', value: 'subscribers' }
]

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState('posts')
  const userService = new UserService()
  const user = userService.getProfile()

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
    </TabsBody>
  </Tabs>
}

export default ProfileTab