import { FC, PropsWithChildren } from 'react'
import { Root } from './PanelBackground.styled'

type PanelBackgroundProps = {
  /** weather icon name as a basis to choose gradient colors according to current weather */
  weather: string
}
const PanelBackground: FC<PropsWithChildren<PanelBackgroundProps>> = ({
  children,
  weather,
}) => <Root weather={weather}>{children}</Root>

export default PanelBackground
