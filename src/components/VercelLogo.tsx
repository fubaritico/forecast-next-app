import { FC, PropsWithChildren } from 'react'
import Default from './VercelLogo.styled'

const VercelLogo: FC<PropsWithChildren> = () => (
  <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    By{' '}
    <Default
      src="/vercel.svg"
      alt="Vercel Logo"
      className="vercelLogo"
      width={100}
      height={24}
      priority
    />
  </a>
)

export default VercelLogo
