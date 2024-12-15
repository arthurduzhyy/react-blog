import { PhotoIcon } from '@heroicons/react/24/solid'
import { TabPanel } from '@material-tailwind/react'
import { FC } from 'react'
import ContentItemCard from '../../../home/component/card/ContentItemCard'
import { Post } from '../../../home/service/types'

interface ProfilePostsTabProps {
  posts : Post[]
}

const ProfilePostsTab: FC<ProfilePostsTabProps> = ({posts}) => {
  return <TabPanel value="posts" className="mt-2 pr-0 pl-0">
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 flex items-center mb-4 sm:mb-6">
        <PhotoIcon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-500 mr-3" />
        Posts
      </h2>
      {posts.map(p => <ContentItemCard
        key={p.id}
        post={p}
      />)}
      </div>
  </TabPanel>
}

export default ProfilePostsTab