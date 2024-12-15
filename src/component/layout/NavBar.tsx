import { Bars3Icon } from '@heroicons/react/16/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../feature/auth/hook/useAuth'
import ThemeToggleButton from '../../feature/theme/ThemeToggleButton'


type DropdownItem = {
  label: string
  to: string
  onClick?: () => void
}

type DropdownProps = {
  isOpen: boolean
  toggleDropdown: () => void
  items: DropdownItem[]
}


const Dropdown: FC<DropdownProps> = ({ isOpen, toggleDropdown, items }) => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    toggleDropdown()
    navigate('/login')
  }

  return <Menu
    open={isOpen}
    handler={toggleDropdown}
  >
    <MenuHandler>
      <UserIcon className="h-6 w-6 text-gray-900 dark:text-white" />
    </MenuHandler>
    <MenuList
      className="dark:bg-gray-900 dark:text-white"
    >
      {items.map((item, index) => <MenuItem
        key={index}
        onClick={item.onClick}
        className="mb-1"
      >
        <Link to={item.to}>{item.label}</Link>
      </MenuItem>)}

      <hr className="my-3" />

      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </MenuList>
  </Menu>
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const dropdownItems: DropdownItem[] = [
    { label: 'My profile', to: '/profile' },
    { label: 'Settings', to: '#' }
  ]

  return <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      {/* Логотип */}
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="DDS Blog Logo"
        />
        <span className="sm:inline self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DDS Blog
        </span>
      </Link>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>

          <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" />
        </button>

        <ThemeToggleButton />

        <button onClick={()=> navigate('/chat/inbox')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="size-6 dark:text-white">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>
        </button>
        <button onClick={toggleDropdown} aria-label="User menu" className="relative">
          <svg
            className="w-10 h-7 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Dropdown isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} items={dropdownItems} />
      </div>
    </div>

    {isMenuOpen && <div
      id="mega-menu-full-dropdown"
      className="block mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div
        className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6"
      >
        <ul>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Following</a>
          </li>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Segmentation</a>
          </li>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Marketing CRM</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Online Stores</a>
          </li>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Segmentation</a>
          </li>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Marketing CRM</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Audience
              Management</a>
          </li>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Creative Tools</a>
          </li>
          <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Marketing
              Automation</a>
          </li>
        </ul>
      </div>
    </div>
    }
  </nav>
}

export default Navbar