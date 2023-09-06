'use client'

import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useThemeContext } from '@/context/ThemeContext'

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button
      className="fixed bottom-5 outline-none right-5 bg-slate-50 w-10 sm:w-14 h-10 sm:h-14 bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-full flex items-center justify-center custom-hover-115 transition-all dark:bg-slate-900 custom-border"
      onClick={toggleTheme}>
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}
