'use client'

import { FC, PropsWithChildren, ReactNode } from 'react'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <div>{children}</div>
)

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
