import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@radix-ui/themes/styles.css'
import 'react-toastify/ReactToastify.css'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { siteInfo } from '@/constants'
import Header from '@/components/header'
import Footer from '@/components/footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class">
          <Theme>
            <Header />
            {children}
            <Footer />
          </Theme>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
