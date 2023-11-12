import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



export const metadata: Metadata = {
  title: 'simple project',
  description: 'creat using nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-800' >
        <Navbar/> 
        {children}
        <Footer/>
        </body>
    </html>
  )
}
