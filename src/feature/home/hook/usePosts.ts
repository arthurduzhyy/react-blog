import { useCallback, useEffect, useReducer, useState } from 'react'
import PostService from '../service/post.service'
import { PostRequest } from '../service/types'
import { addPostAction, setPostsAction, setUsersPostsAction } from '../store/post.actions'
import { initialState, postReducer } from '../store/post.reducer'

const usePosts = () => {
  const [state, dispatch] = useReducer(postReducer, initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const postService = new PostService()

  const load = useCallback(async () => {
    setLoading(true)

    try {
      const response = await postService.getAll()
      dispatch(setPostsAction(response))
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }, [])

  const addPost = useCallback(async (post: PostRequest) => {
    setLoading(true)

    try {
      const response = await postService.createPost(post)
      dispatch(addPostAction(response))
    } catch (e) {
      setError((e as Error).message)
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const getUserPosts = useCallback(async (userId : string)=> {
    setLoading(true)

    try {
      const response = await postService.getByUserId(userId)
      dispatch(setUsersPostsAction(response))
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [])

  return {
    posts: state.postList,
    loading,
    error,
    load,
    addPost,
    getUserPosts
  }
}

export default usePosts