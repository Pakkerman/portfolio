'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitButton from './submit-button'
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
      <p className="-mt-6 text-gray-700">
        Please Contect me directly at{' '}
        <a className="underline" href="mailto:example@email.com">
          example@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10"
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
          className="px-4 rounded-lg h-14 borderBlack outline-slate-900"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="p-4 my-3 rounded-lg borderBlack h-52 outline-slate-900"
          placeholder="Your Message"
          maxLength={5000}
          required
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
}
