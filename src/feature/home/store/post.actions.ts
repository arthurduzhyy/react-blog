import { Post } from '../service/types'

type PostPayloadTypes = Post | Post[]

export interface PostAction {
  type: PostActionTypes
  payload: PostPayloadTypes
}

export enum PostActionTypes {
  ADD_POST = 'ADD_POST',
  SET_POSTS = 'SET_POSTS',
  SET_USERS_POSTS = 'SET_USERS_POSTS'
}

export const addPostAction = (post: Post): PostAction => ({
  type: PostActionTypes.ADD_POST,
  payload: post
})

export const setPostsAction = (posts: Post[]): PostAction => ({
  type: PostActionTypes.SET_POSTS,
  payload: posts
})

export const setUsersPostsAction = (posts: Post[]): PostAction => ({
  type: PostActionTypes.SET_USERS_POSTS,
  payload: posts
})