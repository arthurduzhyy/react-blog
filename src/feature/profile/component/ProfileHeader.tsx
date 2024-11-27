import { Cog6ToothIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Avatar, Button } from '@material-tailwind/react'
import UserService from '../service/user.service'

const ProfileHeader = () => {
  const userService = new UserService()
  const user = userService.getProfile()

  return <div className="flex flex-col sm:flex-row items-center justify-between p-4 pt-0 pr-0 pl-0">
    <div className="flex items-center space-x-4 p-4 pt-0 pr-0 pl-0">
      <Avatar src={user?.profilePicture} alt={`${user?.firstName} ${user?.lastName}`} size="xxl" />
      <div>
        <h1 className="text-2xl font-bold text-center sm:text-left">
          {user?.userName}
        </h1>
        <p className="text-gray-500 text-center sm:text-left">{user?.firstName} {user?.lastName}</p>
      </div>
    </div>
    <div className="flex mt-4 sm:mt-0">
      <Button
        size="sm"
        className="flex justify-center items-center mr-2"
        type="button"
        color="indigo"
        variant="gradient"
      >
        <PlusIcon className="h-5 w-5 mr-1" /> new post
      </Button>
      <Button
        size="sm"
        className="flex justify-center items-center"
        type="button"
        color="gray"
        variant="gradient"
      >
        <Cog6ToothIcon className="h-5 w-5" />
      </Button>
    </div>
  </div>
}

export default ProfileHeader
