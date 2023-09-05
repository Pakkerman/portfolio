'use server'

import { getErrorMessage, validateString } from '@/lib/helpers'
import { Resend } from 'resend'
import { ContactFormEmail } from '@/email/ContactFormEmail'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const message = formData.get('message')
  const senderEmail = formData.get('senderEmail')

  if (!validateString(senderEmail, 500))
    return { error: 'invalid sender email' }
  if (!validateString(message, 5000)) return { error: 'invalid message' }

  let data
  try {
    data = await resend.emails.send({
      from: 'Contact Form of Portfolio Site <onboarding@resend.dev>',
      to: 'pakkermandev@gmail.com',
      subject: 'message from contact form',
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    })
  } catch (error: unknown) {
    return { error: getErrorMessage(error) }
  }

  return { data }
}
