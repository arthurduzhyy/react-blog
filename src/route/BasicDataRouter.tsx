import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../component/layout/Layout'
import NotFoundPage from '../component/NotFoundPage'
import Root from '../component/Root'
import LoginPage from '../feature/auth/LoginPage'

const BasicDataRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={Root}>
        <Route path="/" Component={Layout}>
          <Route path="*" Component={NotFoundPage} />
        </Route>
        <Route path="/login" Component={LoginPage}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default BasicDataRouter


