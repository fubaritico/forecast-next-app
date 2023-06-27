import React, { FC } from 'react'
import { getDsIcons, IconsGroup } from '@Svg/allIcons'
import IconsGrid from '@Atoms/IconGrid'
import IconGridItem from '@Atoms/IconGridItem'

export type AllIconsProps = {
  title: string
  iconGroupName: IconsGroup
  iconsSize?: number
}

const AllIcons: FC<AllIconsProps> = ({
  title,
  iconGroupName,
  iconsSize = 24,
}) => {
  const groupIcons = getDsIcons(iconGroupName)

  return (
    <IconsGrid title={title}>
      {groupIcons &&
        Object.entries(groupIcons).map(([name, Icon]) => (
          <IconGridItem key={name} name={name}>
            <span style={{ width: iconsSize }}>
              <Icon className="fill-white" data-test={name} role="img" />
            </span>
          </IconGridItem>
        ))}
    </IconsGrid>
  )
}

export default AllIcons
