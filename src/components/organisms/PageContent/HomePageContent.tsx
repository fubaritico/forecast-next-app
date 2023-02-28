import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import Thirteen from '@Atoms/Thirteen/Thirteen'
import ClickableCard from '@Molecules/ClickableObservation/ClickableCard'
import { Code, NextLogo } from './HomePageContent.styled'

const HomePageContent: FC<PropsWithChildren> = () => (
  <>
    <p>
      Get started by editing&nbsp;
      <Code>pages/index.tsx</Code>
    </p>
    <Link href="/forecasts/35/45">
      See Forecasts ofr 35 degrees of latitude & 45 degrees of longitude
    </Link>

    <NextLogo
      className="Logo"
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
    <Thirteen />

    <ClickableCard
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      title="Docs"
      description="Find in-depth information about Next.js features and&nbsp;API."
      isExternalLink
    />

    <ClickableCard
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      title="Learn"
      description="Learn about Next.js in an interactive course with&nbsp;quizzes!"
      isExternalLink
    />

    <ClickableCard
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      title="Templates"
      description="Discover and deploy boilerplate example Next.js&nbsp;projects."
      isExternalLink
    />

    <ClickableCard
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      title="Deploy"
      description="Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
      isExternalLink
    />
  </>
)

export default HomePageContent
