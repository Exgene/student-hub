import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Provider from '@/components/SessionProvider'
import '@/styles/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Students HUB',
  description: 'NMAMIT Students Hub, Its about all the students essentials in one place!',
  icons: [{ rel: 'icon', url: '/graduated.png' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={`font-sans ${inter.variable}`}>
          <Navbar />
          {children}
          <Footer/>
        </body>
      </Provider>
    </html>
  )
}
