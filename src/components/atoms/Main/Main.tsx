'use client'

import { FC, PropsWithChildren } from 'react'

const Main: FC<PropsWithChildren> = ({ children }) => (
  <main className="flex flex-col justify-center items-center p-10 min-h-screen">
    {children}
  </main>
)

export default Main
