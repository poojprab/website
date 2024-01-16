import 'tailwindcss/tailwind.css'

import { Analytics } from '@vercel/analytics/react'
import { Bebas_Neue, IBM_Plex_Mono, Inter } from 'next/font/google'

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const renaissance = Bebas_Neue({
  variable: '--font-renaissance',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} ${renaissance.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
