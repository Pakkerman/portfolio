'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * idx },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 ">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
        {skillsData.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-2 px-5 py-3 bg-white borderBlack rounded-xl dark:bg-slate-800"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}>
            <span className="scale-110 dark:text-white/90">{item.icon}</span>
            <span className="text-sm text-gray-700 dark:text-white/80">
              {item.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
