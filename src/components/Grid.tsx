import { FC, PropsWithChildren } from 'react'
import Default from './Grid.styled'

const Grid: FC<PropsWithChildren> = ({ children }) => (
  <Default>{children}</Default>
)

export default Grid
