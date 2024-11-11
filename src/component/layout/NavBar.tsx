import classNames from 'classnames'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

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
  return (
    <div
      className={classNames(
        'absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600',
        {
          hidden: !isOpen
        }
      )}
      style={{
        top: '72px',
        right: '88px',
        transform: 'translateX(50%)'
      }}
    >
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={item.onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          onClick={toggleDropdown}
        >
          Sign out
        </a>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  const dropdownItems: DropdownItem[] = [
    { label: 'My profile', to: '#' },
    { label: 'Settings', to: '#' }
  ]

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Логотип */}
        <a href="http://localhost:5173/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="DDS Blog Logo"
          />
          <span className="sm:inline self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DDS Blog
          </span>
        </a>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
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

      {isMenuOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="block mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
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
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Audience Management</a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Creative Tools</a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Marketing Automation</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar