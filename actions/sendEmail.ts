'use server'

import { getErrorMessage, validateString } from '@/lib/helpers'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const message = formData.get('message')
  const senderEmail = formData.get('senderEmail')

  if (!validateString(senderEmail, 500))
    return { error: 'invalid sender email' }
  if (!validateString(message, 5000)) return { error: 'invalid message' }

  try {
    await resend.emails.send({
      from: 'Contact Form of Portfolio Site <onboarding@resend.dev>',
      to: 'pakkermandev@gmail.com',
      subject: 'message from contact form',
      reply_to: senderEmail as string,
      text: message as string,
    })
  } catch (error: unknown) {
    return { error: getErrorMessage(error) }
  }
}
