'use client'

import ThemeProvider from '@Styles/ThemeProvider'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
