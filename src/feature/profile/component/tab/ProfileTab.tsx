import { Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import { useState } from 'react'
import useUser from '../../hook/useUser'
import ProfileInfoTab from './ProfileInfoTab'

const data = [
  { label: 'Posts', value: 'posts' },
  { label: 'Information', value: 'info' }
]

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState('posts')
  const { user } = useUser()

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