'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'

export type ProjectProps = (typeof projectsData)[number]

export function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      className="mb-3 sm:mb-8 last:mb-0 group "
      style={{ scale: scaleProgess, opacity: opacityProgess }}>
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/90">
        <div className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((item, idx) => (
              <li
                className="px-3 bg-black/70 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] sm:block hidden transition 
        group-hover:scale-[1.04] 

        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 
        
        group-even:-left-40 
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2 "
          src={imageUrl}
          alt="Project I build"
          quality={95}
        />
      </section>
    </motion.div>
  )
}
