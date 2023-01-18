import { FC, PropsWithChildren } from 'react'
import Description from '@Components/Description'
import Link from 'next/link'
import VercelLogo from '@Components/VercelLogo'
import Center from '@Components/Center'
import Thirteen from '@Components/Thirteen'
import Grid from '@Components/Grid'
import ClickableCard from '@Components/ClickableCard'
import { Code, NextLogo } from './HomePage.styled'

const HomePage: FC<PropsWithChildren> = () => (
  <>
    <Description>
      <p>
        Get started by editing&nbsp;
        <Code>pages/index.tsx</Code>
      </p>
      <Link href="/forecasts/35/45">
        See Forecasts ofr 35 degrees of latitude & 45 degrees of longitude
      </Link>
      <div>
        <VercelLogo />
      </div>
    </Description>

    <Center>
      <NextLogo
        className="Logo"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Thirteen />
    </Center>

    <Grid>
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
    </Grid>
  </>
)

export default HomePage
