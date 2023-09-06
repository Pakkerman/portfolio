'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitButton from './SubmitButton'
import toast from 'react-hot-toast'

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
      <p className="mb-2 -mt-4 text-gray-700 dark:text-white/80">
        Please Contect me directly at:{' '}
      </p>
      <a
        className="block mb-2 font-semibold underline transition-all dark:text-orange-100 dark:hover:text-orange-400"
        href="mailto:pakkermandev@gmail.com">
        pakkermandev@gmail.com
      </a>{' '}
      <p>or through this form:</p>
      <form
        className="flex flex-col mt-10 "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
            return
          }
          toast.success('Email successfully sent!')
        }}>
        <input
          name="senderEmail"
          type="email"
          className="px-4 transition-all rounded-lg h-14 custom-border outline-slate-900 dark:bg-slate-200 dark:text-black dark:outline-none dark:focus:bg-slate-50"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="p-4 my-3 transition-all rounded-lg custom-border h-52 outline-slate-900 dark:outline-none dark:bg-slate-200 dark:text-black dark:focus:bg-slate-50"
          placeholder="Your Message"
          maxLength={5000}
          required
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
}
