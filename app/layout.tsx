import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: `Jon Uriu's awesome website!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-screen w-screen">
      <body className={inter.className + "w-full h-full"}>
        <div className="w-full h-[50px] fixed top-0 z-10 bg-slate-500/50">
            <Navbar/>
        </div>
        <div className="pt-[50px] w-full h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
