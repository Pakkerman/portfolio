'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(90%,32rem)] text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-gray-700">
        Please Contect me directly at{' '}
        <a className="underline" href="mailto:example@email.com">
          example@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10"
        action={async (data) => {
          console.log('Running on client')
          await sendEmail(data)
        }}>
        <input
          name="senderEmail"
          type="email"
          className="px-4 rounded-lg h-14 borderBlack outline-slate-900"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="p-4 my-3 rounded-lg borderBlack h-52 outline-slate-900"
          placeholder="Your Message"
          maxLength={1000}
          required
        />
        <button
          type="submit"
          className="h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none transition-all flex items-center gap-2 justify-center text-white group focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950">
          Submit{' '}
          <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  )
}
