'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme: () => void }
type ThemeContextProviderProps = { children: React.ReactNode }

const ThemeContext = createContext<ThemeContext | null>(null)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('pakkerman_website_theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('pakkerman_website_theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const theme = window.localStorage.getItem(
      'pakkerman_website_theme'
    ) as Theme | null
    if (theme) {
      setTheme(theme)
      document.documentElement.classList.add('dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context)
    throw Error('useThemeContext must be use inside ThemeContextProvider')
  return context
}
