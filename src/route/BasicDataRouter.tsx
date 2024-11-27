import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../component/layout/Layout'
import NotFoundPage from '../component/NotFoundPage'
import Root from '../component/Root'
import LoginPage from '../feature/auth/LoginPage'
import RegisterPage from '../feature/auth/RegisterPage'
import ProfilePage from '../feature/profile/ProfilePage'

const BasicDataRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={Root}>
        <Route path="/" Component={Layout}>
          <Route path="/profile" Component={ProfilePage} />
          <Route path="*" Component={NotFoundPage} />
        </Route>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/register" Component={RegisterPage}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default BasicDataRouter


