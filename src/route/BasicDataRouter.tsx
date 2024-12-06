import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Chat } from '../feature/chatRoom/page/Chat'
import ChatInbox from '../feature/chatRoom/page/ChatInbox'
import Layout from '../component/layout/Layout'
import NotFoundPage from '../component/NotFoundPage'
import Root from '../component/Root'
import LoginPage from '../feature/auth/LoginPage'
import RegisterPage from '../feature/auth/RegisterPage'
import HomePage from '../feature/home/HomePage'
import ProfilePage from '../feature/profile/ProfilePage'

const BasicDataRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={Root}>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={HomePage} />
          <Route path="/profile" Component={ProfilePage} />
          <Route path="*" Component={NotFoundPage} />
          <Route path="/chat/inbox" Component={ChatInbox} />
          <Route path="/chat/:id" Component={Chat} />
        </Route>
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />

      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default BasicDataRouter


