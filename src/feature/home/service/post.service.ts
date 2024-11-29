import HttpClient from '../../../lib/http'
import { Post, PostRequest } from './types'

class PostService {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  public async createPost(post: PostRequest) {
    const formData = new FormData()
    formData.append("body", post.body)
    formData.append("file", post.file)

    return await this.httpClient.post<Post>('/posts', {
      body: formData
    })
  }

  public async getAll() {
    return await this.httpClient.get<Array<Post>>('/posts')
  }
}

export default PostService