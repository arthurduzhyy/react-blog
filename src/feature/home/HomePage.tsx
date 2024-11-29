import ContentCard from './component/card/ContentCard'
import PostInputCard from './component/card/PostInputCard'

const HomePage = () => {
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