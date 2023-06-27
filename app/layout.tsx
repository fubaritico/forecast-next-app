import { ReactNode } from 'react'
import { Metadata } from 'next'

import Main from '@Atoms/Main'
import StyledComponentsRegistry from '../lib/registery'
import { Providers } from './providers'

import { HelveticaNeueLT, Inter } from './localFonts'

import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${HelveticaNeueLT.variable} ${Inter.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Main>{children}</Main>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
