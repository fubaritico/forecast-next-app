import { FC, PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'

import ClickableObservationView from '@Molecules/ClickableObservationView'

// See what has been done for link or anchor
export type ClickableObservationCardProps = LinkProps & {
  title: ReactNode
  description: ReactNode
}

const ClickableObservationCard: FC<
  PropsWithChildren<ClickableObservationCardProps>
> = ({ href, title, description, ...rest }) => (
  <Link
    className="ClickableCard"
    href={href}
    rel="noopener noreferrer"
    aria-label={typeof title === 'string' ? title : undefined}
    {...rest}
  >
    <ClickableObservationView title={title} description={description} />
  </Link>
)
export default ClickableObservationCard
