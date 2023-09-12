import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import Header from '@/components/header';

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
