import { FC, PropsWithChildren } from 'react'
import Default from './Description.styled'

const Description: FC<PropsWithChildren> = ({ children }) => (
  <Default>{children}</Default>
)

export default Description
