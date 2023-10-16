import './globals.css'
import type { Metadata } from 'next'
import { Yatra_One,Imprima,Montserrat,Varela_Round } from 'next/font/google'

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

const montserrat = Montserrat({
  subsets:['latin'],
  variable:'--font-montserrat',
  weight:['400','600','700']
})

export const varelaRound= Varela_Round ({
  subsets:['latin'],
  variable:'--font-varela-round',
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
      <body className={`${imprima.variable} ${yatraOne.variable} ${montserrat.variable} ${varelaRound.variable}  bg-[#fafafa]`}>{children}</body>
    </html>
  )
}
