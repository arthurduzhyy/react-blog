import { Bars3Icon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../feature/auth/service/auth.service'
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
  const authService = new AuthService()

  const handleLogout = () => {
    authService.logout()
    toggleDropdown()
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