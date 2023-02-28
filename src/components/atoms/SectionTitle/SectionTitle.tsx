import { FC } from 'react'
import { Root } from './SectionTitle.styled'

type SectionTitleProps = {
  title: string
  className?: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => (
  <Root className={className}>{title.toUpperCase()}</Root>
)

export default SectionTitle
