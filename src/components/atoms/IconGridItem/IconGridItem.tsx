import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import IconContainer from '@Atoms/IconContainer'

export type IconGridItemProps = {
  className?: string
  name: string
}

const IconGridItem: FC<PropsWithChildren<IconGridItemProps>> = ({
  children,
  className,
  name,
}) => (
  <IconContainer className={clsx('font-mono', className)}>
    <span className="flex items-center justify-center bg-appVeryDarkBlue1 w-full p-2 flex-1">
      {children}
    </span>
    <span className="block text-white bg-appLightGrey1 w-full p-2 text-[12px] text-center">
      {name}
    </span>
  </IconContainer>
)

export default IconGridItem
