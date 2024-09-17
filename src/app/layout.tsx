import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme>
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  )
}
