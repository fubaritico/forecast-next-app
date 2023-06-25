'use client'

import { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import Default from './Thirteen.styled'

const Thirteen: FC<PropsWithChildren> = () => (
  <Default>
    <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
  </Default>
)

export default Thirteen
