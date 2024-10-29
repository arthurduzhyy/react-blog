import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFoundPage from '../component/NotFoundPage'

const BasicDataRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="*" Component={NotFoundPage} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default BasicDataRouter


