import { User } from '../../profile/service/types'

export interface PostRequest {
  body: string
  file: File
}

export interface Post {
  id: string
  body: string
  createdAt: string
  user: User
  images: PostImage[]
}

interface PostImage {
  id: string
  url: string
}
