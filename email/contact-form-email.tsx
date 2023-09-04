import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components'

import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = { message: string; senderEmail: string }

export function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className="text-black bg-gray-100">
          <Container>
            <Section className="px-10 py-4 my-10 bg-white rounded-md borderBlack">
              <Heading className="leading-tight">
                You received the following message
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>This email is from: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
