import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { ThemeProvider as MaterialThemeProvider } from '@material-tailwind/react'

interface ThemeContextProps {
  children: ReactNode
}

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {

    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  })

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const customTheme = {
    button: {
      defaultProps: {
        color: theme === 'dark' ? 'blue-gray' : 'blue',
      },
    },
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MaterialThemeProvider value={customTheme}>
        {children}
      </MaterialThemeProvider>
    </ThemeContext.Provider>
  )
}
