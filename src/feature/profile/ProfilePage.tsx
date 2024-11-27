import ProfileHeader from './component/ProfileHeader'
import ProfileTab from './component/tab/ProfileTab'

const ProfilePage = () => {
  return <div className="max-w-full sm:max-w-4xl mx-auto p-4">
    <ProfileHeader />
    <ProfileTab />
  </div>
}

export default ProfilePage
