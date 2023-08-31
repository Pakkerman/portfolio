'use client'

import React, { createContext, useContext, useState } from 'react'
import { links } from '@/lib/data'

type SectionsName = (typeof links)[number]['name']
type ActiveSectionContext = {
  activeSection: SectionsName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionsName>>
}
type ActiveSectionContextProviderProps = { children: React.ReactNode }

const ActiveSectionContext = createContext<ActiveSectionContext | null>(null)

export function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionsName>('Home')

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
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
