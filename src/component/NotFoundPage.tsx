import useTitle from '../hook/useTitle'

const NotFoundPage = () => {
  useTitle('404')

  return <div>
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
}

export default NotFoundPage