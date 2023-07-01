'use client'

import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

type MainProps = {
  className?: string
}

const Main: FC<PropsWithChildren<MainProps>> = ({ children, className }) => (
  <main
    className={clsx(
      'flex flex-col justify-center items-center p-10 min-h-screen',
      className
    )}
  >
    {children}
  </main>
)

export default Main
