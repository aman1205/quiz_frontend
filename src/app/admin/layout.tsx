// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Inter } from 'next/font/google'
import './styles.css'
import { Component } from '@/components/component/component'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const isAdmin = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className='min-h-screen w-full bg-white text-black flex'>
         {isAdmin && <Component /> }
        {children}
        </div>
      </body>
    </html>
  )
}