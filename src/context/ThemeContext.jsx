import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'sjm-theme'
const DEFAULT_THEME = 'dark'

const ThemeContext = createContext({ theme: DEFAULT_THEME, toggleTheme: () => {} })

// Read the theme the inline script in index.html already committed to, so the
// first React render agrees with the class already on <html> (no flash, no flip).
const getInitialTheme = () => {
  if (typeof window === 'undefined') return DEFAULT_THEME
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return DEFAULT_THEME
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
