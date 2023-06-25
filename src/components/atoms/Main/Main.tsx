'use client'

import { FC, PropsWithChildren } from 'react'
import Default from './Main.styled'

const Main: FC<PropsWithChildren> = ({ children }) => (
  <Default>{children}</Default>
)

export default Main
