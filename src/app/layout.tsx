import './globals.css'
import type { Metadata } from 'next'
import { Yatra_One,Imprima } from 'next/font/google'

const yatraOne=Yatra_One({
  subsets: ['latin'],
  variable:'--font-yatra',
  weight:['400']
})
const imprima=Imprima({
  subsets: ['latin'],
  variable:'--font-imprima',
  weight:['400']
})

export const metadata: Metadata = {
  title: 'Priyanshu Saini',
  description: 'App and web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${imprima.variable} ${yatraOne.variable}`}>{children}</body>
    </html>
  )
}
