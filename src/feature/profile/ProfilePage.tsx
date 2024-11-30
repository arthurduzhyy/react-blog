import useTitle from '../../hook/useTitle'
import ProfileHeader from './component/ProfileHeader'
import ProfileTab from './component/tab/ProfileTab'

const ProfilePage = () => {
  useTitle('Profile')

  return <div className="max-w-full sm:max-w-4xl mx-auto p-4">
    <ProfileHeader />
    <ProfileTab />
  </div>
}

export default ProfilePage
