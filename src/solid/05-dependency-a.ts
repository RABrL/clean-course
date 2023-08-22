import { PostService } from './05-dependency-b'
import { JsonDataBaseService, LocalDataBaseService, WebAPIProvider } from './05-dependency-c'

;(async () => {

  // inyeccion de dependencias
  // const provider = new JsonDataBaseService()
  // const provider = new LocalDataBaseService()
  const provider = new WebAPIProvider()

  const postService = new PostService(provider)

  const posts = await postService.getPosts()

  console.log({ posts })
})()
