import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'],variable:'--font-roboto' })
const baiJamjuree  = BaiJamjuree({ 
  subsets:['latin'], 
  weight:'700',
  variable:'--font-bai-jamjuree',
})

export const metadata = {
  title: 'Space trip',
  description: 'A time testtube built with React, Next.js, TailwindCSS, and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable}font-sans bg-purple-900 text-gold-100`}>{children}</body>
    </html>
  )
}
