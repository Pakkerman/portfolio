'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { links } from '@/lib/data'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  return (
    <header className="relative z-10">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 "
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />

      <nav className="flex fixed top-0 left-1/2 h-12 -translate-x-1/2 py-2 mt-[0.25rem] sm:mt-0 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((item) => (
            <motion.li
              className="relative flex items-center justify-center h-3/4"
              key={item.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                href={item.hash}
                onClick={() => {
                  setActiveSection(item.name)
                  setTimeOfLastClick(Date.now())
                }}
                // className={` flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition-all  dark:hover:text-gray-50 ${
                //   activeSection === item.name
                //     ? 'dark:text-gray-200'
                //     : 'text-gray-950 dark:text-gray-500'
                // } `}
                className={`${clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition  dark:hover:text-gray-50',
                  {
                    'text-gray-950 dark:text-gray-200':
                      activeSection === item.name,
                  }
                )}`}>
                {item.name}
                {item.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 bg-gray-100 rounded-full -z-10 dark:bg-gray-700 custom-border"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
