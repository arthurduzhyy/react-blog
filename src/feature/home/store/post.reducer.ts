import { Post } from '../service/types'
import { PostAction, PostActionTypes } from './post.actions'

interface PostState {
  postList: Post[]
  userPostsList: Post[]
}

export const initialState: PostState = {
  postList: [],
  userPostsList: []
}

export const postReducer = (state: PostState = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.ADD_POST:
      return {
        ...state,
        postList: [...state.postList, action.payload as Post]
      }
    case PostActionTypes.SET_POSTS:
      return {
        ...state,
        postList: action.payload as Post[]
      }
    case PostActionTypes.SET_USERS_POSTS:
      return {
        ...state,
        userPostsList: action.payload as Post[]
      }
    default:
      return state
  }
}