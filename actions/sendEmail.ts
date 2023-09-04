'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  console.log('running on server')
  console.log(formData.get('senderEmail'))
  console.log(formData.get('message'))

  // resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'pakkermandev@gmail.com',
  //   subject: 'message from contact form',
  //   text: 'hello there',
  // })
}
