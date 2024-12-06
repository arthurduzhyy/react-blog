import { CalendarIcon, EnvelopeIcon, IdentificationIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'
import { TabPanel } from '@material-tailwind/react'
import { FC, memo } from 'react'
import { User } from '../../service/types'

interface ProfileInfoTabProps {
  user?: User
}

const ProfileInfoTabComponent: FC<ProfileInfoTabProps> = ({ user }) => {
  return <TabPanel value="info" className="mt-2 pr-0 pl-0">
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 flex items-center mb-4 sm:mb-6">
        <UserIcon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-500 mr-3" />
        Information
      </h2>
      <ul className="space-y-3 sm:space-y-4">
        <li className="flex items-center">
          <IdentificationIcon className="h-5 sm:h-6 w-5 sm:w-6 text-gray-500 mr-3" />
          <span className="text-gray-700">
              <strong className="font-medium">Full name:</strong> {user?.firstName} {user?.lastName}
            </span>
        </li>
        <li className="flex items-center">
          <EnvelopeIcon className="h-5 sm:h-6 w-5 sm:w-6 text-gray-500 mr-3" />
          <span className="text-gray-700">
              <strong className="font-medium">Email:</strong> {user?.email}
            </span>
        </li>
        <li className="flex items-center">
          <UserGroupIcon className="h-5 sm:h-6 w-5 sm:w-6 text-gray-500 mr-3" />
          <span className="text-gray-700">
              <strong className="font-medium">Gender:</strong> {user?.gender || 'Unknown gender'}
            </span>
        </li>
        <li className="flex items-center">
          <CalendarIcon className="h-5 sm:h-6 w-5 sm:w-6 text-gray-500 mr-3" />
          <span className="text-gray-700">
              <strong className="font-medium">Account created:</strong> {user?.createdAt}
            </span>
        </li>
      </ul>
    </div>
  </TabPanel>
}

const ProfileInfoTab = memo(ProfileInfoTabComponent)

export default ProfileInfoTab
