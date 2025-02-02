import { Metadata } from 'next'

import { RenaissanceNavbar } from '@/components/global/renaissance/RenaissanceNavbar'

export const metadata: Metadata = {
  title: {
    template: `%s | TEDxNortheasternU: Renaissance`,
    default: 'TEDxNortheasternU: Renaissance',
  },
  openGraph: {
    images: ['/renaissance-og.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RenaissanceNavbar />
      <main className="w-full max-w-screen-xl mx-auto xl:mt-4">{children}</main>
    </>
  )
}
