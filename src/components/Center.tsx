import { FC, PropsWithChildren } from 'react'
import Default from './Center.styled'

const Center: FC<PropsWithChildren> = ({ children }) => (
  <Default>{children}</Default>
)

export default Center
