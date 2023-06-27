'use client'

import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import Thirteen from '@Atoms/Thirteen'

const HomePageContent: FC<PropsWithChildren> = () => (
  <>
    <p className="font-sans text-xl mb-4">Made with</p>
    <Link href="/frontpage">
      <Thirteen />
    </Link>
  </>
)

export default HomePageContent
