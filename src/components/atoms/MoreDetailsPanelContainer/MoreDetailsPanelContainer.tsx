'use client'

import { FC, PropsWithChildren } from 'react'
import { Root } from './MoreDetailsPanelContainer.styled'

const MoreDetailsPanelContainer: FC<PropsWithChildren> = ({ children }) => (
  <Root>{children}</Root>
)

export default MoreDetailsPanelContainer
