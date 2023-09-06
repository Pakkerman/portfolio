import './globals.css'
import { Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import ThemeSwitch from '@/components/ThemeSwitch'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { ActiveSectionContextProvider } from '@/context/ActiveSectionContext'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata = {
  title: 'Pakkerman | Portfolio',
  description: 'Pakkerman is a full-stack developer',
}

type RootLayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`bg-slate-50 transition-colors dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36 min-w-[390px] ${roboto.className}`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] transition-colors" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] transition-colors" />
        <div className="bg-[#dbd7fb] absolute top-[100vh] opacity-30 -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] transition-colors" />
        <div className="bg-[#fbe2e3] absolute top-[300vh] opacity-50 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] transition-colors" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-center" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
