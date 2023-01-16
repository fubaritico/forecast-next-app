import { FC, PropsWithChildren, ReactNode } from 'react'
import { AnchorCard, NextLinkCard } from './ClickableCard.styled'

// See what has been done for link or anchor
type ClickableCardProps = {
  href: string
  title: ReactNode
  description: ReactNode
  isNextLink?: boolean
}

const ClickableCard: FC<PropsWithChildren<ClickableCardProps>> = ({
  href,
  title,
  description,
  isNextLink = false,
}) =>
  isNextLink ? (
    <NextLinkCard
      className="ClickableCard"
      href={href}
      rel="noopener noreferrer"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </NextLinkCard>
  ) : (
    <AnchorCard href={href} rel="noopener noreferrer" target="_blank">
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </AnchorCard>
  )
export default ClickableCard
