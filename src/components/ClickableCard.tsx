import { FC, PropsWithChildren, ReactNode } from 'react'
import { AnchorCard, NextLinkCard } from './ClickableCard.styled'

// See what has been done for link or anchor
export type ClickableCardProps = {
  href: string
  title: ReactNode
  description: ReactNode
  isExternalLink?: boolean
}

const ClickableCard: FC<PropsWithChildren<ClickableCardProps>> = ({
  href,
  title,
  description,
  isExternalLink = false,
}) =>
  isExternalLink ? (
    <AnchorCard
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={typeof title === 'string' ? title : undefined}
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </AnchorCard>
  ) : (
    <NextLinkCard
      className="ClickableCard"
      href={href}
      rel="noopener noreferrer"
      aria-label={typeof title === 'string' ? title : undefined}
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </NextLinkCard>
  )
export default ClickableCard
