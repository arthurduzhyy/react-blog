import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return <>
    <NavBar />
    <div className="container mx-auto mt-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full max-w-3xl px-4">
          <Outlet />
        </div>
      </div>
    </div>
  </>
}

export default Layout