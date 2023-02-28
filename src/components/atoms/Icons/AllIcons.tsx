import React, { FC } from 'react'
import { getDsIcons, IconsGroup } from '@Svg/allIcons'
import {
  GridContainer,
  IconGridTitle,
  IconName,
  IconGrid,
  IconContainer,
  IconPlaceHolder,
  IconWrapper,
} from './AllIcons.styled'

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
    <>
      <IconGrid>
        <IconGridTitle>{title}</IconGridTitle>
        <GridContainer>
          {groupIcons &&
            Object.entries(groupIcons).map(([name, Icon]) => (
              <IconContainer data-label={name} key={name}>
                <IconPlaceHolder>
                  <IconWrapper width={iconsSize}>
                    <Icon role="img" data-test={name} />
                  </IconWrapper>
                </IconPlaceHolder>
                <IconName>{name}</IconName>
              </IconContainer>
            ))}
        </GridContainer>
      </IconGrid>
    </>
  )
}

export default AllIcons
