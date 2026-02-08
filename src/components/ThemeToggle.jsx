import React, { useState, useEffect } from 'react'

const ThemeToggle = () => {
  // Initialize theme from localStorage or system preference
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [isDark, setIsDark] = useState(getInitialTheme)

  // Apply theme on mount and when state changes
  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    
    console.log('Theme effect running, isDark:', isDark)
    
    if (isDark) {
      root.classList.remove('light-theme')
      body.classList.remove('light-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.add('light-theme')
      body.classList.add('light-theme')
      localStorage.setItem('theme', 'light')
    }
    
    console.log('Body classes:', body.className)
  }, [isDark])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    console.log('Theme toggle clicked, current isDark:', isDark)
    setIsDark(prev => !prev)
  }

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
    </button>
  )
}

export default ThemeToggle