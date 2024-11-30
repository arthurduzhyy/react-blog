import useTitle from '../../hook/useTitle'
import ContentCard from './component/card/ContentCard'
import PostInputCard from './component/card/PostInputCard'

const HomePage = () => {
  useTitle('Home')

  return <>
    <div className="mb-4">
      <PostInputCard />
    </div>

    <div className="mb-4">
      <ContentCard />
    </div>
  </>
}

export default HomePage