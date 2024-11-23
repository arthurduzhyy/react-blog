import { useTheme } from './context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2  rounded-full text-black dark:text-white hover:scale-110 transition-transform"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  )
}

export default ThemeToggleButton
