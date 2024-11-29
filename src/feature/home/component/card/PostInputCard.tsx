import { Button, Input } from '@material-tailwind/react'
import { useRef, useState } from 'react'
import useFile from '../../../../hook/useFile'
import { EVENT_POSTS_UPDATE, EventBus } from '../../../../lib/eventbus'
import usePosts from '../../hook/usePosts'
import { PostRequest } from '../../service/types'
import FilePreview from '../FilePreview'
import FileUploadButton from '../FileUploadButton'

const PostInputCard = () => {
  const [body, setBody] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const { addPost } = usePosts()
  const { file, handleChangeFile, handleRemoveFile } = useFile()

  const reset = () => {
    setBody('')
    handleRemoveFile()

    if (fileRef.current) {
      fileRef.current.value = ''
    }
  }

  const handlePost = async () => {
    if (!body.trim() || !file)
      return

    const post: PostRequest = {
      body: body,
      file: file
    }

    await addPost(post)

    reset()

    EventBus.emit(EVENT_POSTS_UPDATE)
  }

  return <div className="flex flex-col p-4 rounded-lg shadow-md dark:text-white dark:bg-gray-900">
    <div className="flex items-center mb-4">
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="h-10 w-10 rounded-full mr-4"
      />
      <Input
        variant="static"
        color="indigo"
        placeholder="What is happening?!"
        className="dark:bg-gray-900 dark:text-white flex-1"
        containerProps={{ className: 'w-full' }}
        value={body}
        onChange={e => setBody(e.target.value)}
      />
    </div>

    <div className="flex justify-between items-center">
      <div className="flex">
        <FileUploadButton ref={fileRef} onFileChange={handleChangeFile} />
      </div>
      <Button
        color="indigo"
        variant="gradient"
        className="ml-2"
        onClick={handlePost}
        disabled={!body.trim() || !file}
      >Post</Button>
    </div>

    {file && <FilePreview file={file} onRemove={handleRemoveFile} />}
  </div>
}

export default PostInputCard