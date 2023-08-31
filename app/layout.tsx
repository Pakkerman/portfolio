import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pakkerman | Portfolio',
  description: 'Pakkerman is a full-stack developer',
}

type RootLayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 h-[2000px] min-w-[390px] sm:min-[initial]:
      ${inter.className}`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem]" />
        <Header />
        {children}
      </body>
    </html>
  )
}