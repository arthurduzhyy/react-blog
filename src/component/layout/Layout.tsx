import { Outlet } from 'react-router-dom'

const Layout = () => {
  return <div className="container mx-auto mt-4">
    <div className="flex flex-wrap justify-center">
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  </div>
}

export default Layout