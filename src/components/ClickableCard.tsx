import { FC, PropsWithChildren, ReactNode } from 'react'
import ForecastSmallView from '@Components/ForecastSmallView'
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
      <ForecastSmallView title={title} description={description} />
    </AnchorCard>
  ) : (
    <NextLinkCard
      className="ClickableCard"
      href={href}
      rel="noopener noreferrer"
      aria-label={typeof title === 'string' ? title : undefined}
    >
      <ForecastSmallView title={title} description={description} />
    </NextLinkCard>
  )
export default ClickableCard
