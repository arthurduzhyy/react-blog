import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ChatComponent from '../component/chat/Chat'
import Chat from '../component/chat/Chat'
import LoginPage from '../feature/auth/LoginPage'
import Layout from '../component/layout/Layout'
import NotFoundPage from '../component/NotFoundPage'

const BasicDataRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" Component={Layout}>
          <Route path="*" Component={NotFoundPage} />
        </Route>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/chat" Component={ChatComponent}/>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default BasicDataRouter


