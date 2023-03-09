import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import Thirteen from '@Atoms/Thirteen/Thirteen'
import { Code, NextLogo } from './HomePageContent.styled'

const HomePageContent: FC<PropsWithChildren> = () => (
  <>
    <p>
      Get started by editing&nbsp;
      <Code>pages/index.tsx</Code>
    </p>
    <Link href="/frontpage">GO TO APPLICATION</Link>

    <NextLogo
      className="Logo"
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
    <Thirteen />
  </>
)

export default HomePageContent
