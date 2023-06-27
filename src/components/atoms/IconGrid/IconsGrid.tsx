import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

export type IconGridProps = {
  className?: string
  title: string
}

const IconsGrid: FC<PropsWithChildren<IconGridProps>> = ({
  children,
  className,
  title,
}) => (
  <div className={clsx('font-mono', className)}>
    <h2 className="self-stretch truncate text-center text-appVeryDarkBlue1 font-medium pb-4">
      {title}
    </h2>
    <div className="flex flex-wrap gap-2 justify-start mx-0 mt-0  mb-4">
      {children}
    </div>
  </div>
)

export default IconsGrid
