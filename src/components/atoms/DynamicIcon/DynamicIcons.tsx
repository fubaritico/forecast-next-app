import React, { FC } from 'react'

import IconsGrid from '@Atoms/IconGrid'
import IconGridItem from '@Atoms/IconGridItem'
import DynamicIcon, { DynamicIconProps } from './DynamicIcon'

export type DynamicIconsProps = DynamicIconProps & {
  title: string
  iconsNames: string[]
}

const DynamicIcons: FC<DynamicIconsProps> = ({
  title,
  iconsNames,
  size,
  path,
}) => (
  <IconsGrid title={title}>
    {iconsNames.map((name: string) => (
      <IconGridItem key={name} name={name}>
        <DynamicIcon
          path={path}
          name={name}
          fill="#fff"
          size={size}
          data-test={name}
        />
      </IconGridItem>
    ))}
  </IconsGrid>
)

export default DynamicIcons
