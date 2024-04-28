import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Provider from '@/components/SessionProvider'
import SmoothScroll from '@/components/SmoothScroll'
import '@/styles/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  siteName: 'Student Hub Nitte',
  title: 'NMAMIT Student Portal',
  description:
    'NMAMIT Students Hub, Its about all the students essentials in one place!',
  icons: [{ rel: 'icon', url: '/graduated.png' }],
  openGraph: {
    title: 'NMAMIT Student Portal',
    description:
      'NMAMIT Students Hub, Its about all the students essentials in one place!',
    images: [{ url: '/graduated.png' }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="ryB0_yilfa6vtTeB5ySdq3nBtK3QGgKf6_L0vc8Zr9A"
      />
      <Provider>
        <SmoothScroll>
          <body className={`font-sans ${inter.variable}`}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </SmoothScroll>
      </Provider>
    </html>
  )
}
