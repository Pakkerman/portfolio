'use client'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const { ref } = useSectionInView('Home', 0.5)

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96">
      <div className="flex-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}>
            <Image
              src="https://avatars.githubusercontent.com/u/104409243?v=4"
              alt="profile image"
              width="150"
              height="150"
              quality="95"
              priority={true}
              className="object-cover w-24 h-24 rounded-full shadow-xl custom-border"
            />
          </motion.div>
          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            🤌
          </motion.span> */}
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I'm Wang Paike. </span>I'm a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">some </span>experience. I enjoy building{' '}
        <span className="italic">sites & apps</span>. My foucs is{' '}
        <span className="underline">React (Next.js)</span>
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row sm:gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
        <Link
          href="#contact"
          onClick={() => {
            setTimeOfLastClick(Date.now())
            setActiveSection('Contact')
          }}
          className="flex items-center gap-2 text-white transition-all rounded-full outline-none custom-button-pad bg-slate-900 group custom-hover-110 custom-border">
          Contact Me{' '}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 custom-hover-110 dark:bg-white/10 custom-border">
          Download CV{' '}
          <HiDownload className="transition group-hover:translate-y-1 opacity-60" />
        </a>
        <div className="flex gap-10 sm:gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="gap-2 p-4 transition bg-white rounded-full cursor-pointer flex-center text-gray-950 h-14 w-14 custom-hover-115 dark:text-white/80 dark:bg-white/10 custom-border">
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Pakkerman"
            target="_blank"
            className="flex text-[1.35rem] items-center gap-2 p-4 text-gray-950 transition bg-white dark:text-white/80 rounded-full cursor-pointer custom-hover-115  dark:bg-white/10 w-14 h-14 justify-center custom-border">
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
