'use client'

import React, { createContext, useContext, useState } from 'react'
import { links } from '@/lib/data'
import type { SectionName } from '@/lib/types'

type ActiveSectionContext = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
type ActiveSectionContextProviderProps = { children: React.ReactNode }

const ActiveSectionContext = createContext<ActiveSectionContext | null>(null)

export function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)
  // disable interctino observer to see what is in view for 1 section

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
  if (!context)
    throw new Error(
      'useActiveSectionContext must be inside of ActiveSectionContextProvider'
    )
  return context
}
