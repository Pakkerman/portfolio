'use client'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

import { useSectionInView } from '@/lib/hooks'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96">
      <div className="flex items-center justify-center">
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
              className="w-24 h-24 border-[0.35rem] rounded-full border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
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
          </motion.span>
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
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105">
          Contact me here{' '}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="flex items-center gap-2 py-3 transition bg-white border rounded-full outline-none cursor-pointer border-black/10 group px-7 focus:scale-110 hover:scale-110 active:scale-105">
          Download CV{' '}
          <HiDownload className="transition group-hover:translate-y-1 opacity-60" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="flex items-center gap-2 p-4 text-gray-950 transition bg-white border rounded-full cursor-pointer foucs:scale-[1.15] hover:scale-[1.15] active:scale-105 border-black/10">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Pakkerman"
          target="_blank"
          className="flex text-[1.35rem] items-center gap-2 p-4 text-gray-950 transition bg-white border rounded-full cursor-pointer foucs:scale-[1.15] hover:scale-[1.15] active:scale-105 border-black/10">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
