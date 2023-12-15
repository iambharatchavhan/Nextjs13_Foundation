import React from 'react'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'created by Bharat',
    description: 'this is the secondary routing',
  }
  

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
      <nav>About Navbar</nav>
      <main>
        {children}
      </main>
    </div>
  )
}
