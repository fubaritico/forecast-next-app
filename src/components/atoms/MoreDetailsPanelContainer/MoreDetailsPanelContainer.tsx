'use client'

import { FC, PropsWithChildren } from 'react'

const MoreDetailsPanelContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-row p-10">{children}</div>
)

export default MoreDetailsPanelContainer
