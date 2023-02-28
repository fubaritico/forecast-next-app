import React, { FC } from 'react'

import { DynamicIconProps } from './DynamicIcon'
import {
  GridContainer,
  IconGridTitle,
  IconName,
  IconGrid,
  IconContainer,
  IconPlaceHolder,
  ThemedIcon,
} from './DynamicIcons.styled'

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
  <IconGrid>
    <IconGridTitle>{title}</IconGridTitle>
    <GridContainer>
      {iconsNames.map((name: string) => (
        <IconContainer key={name}>
          <IconPlaceHolder>
            <ThemedIcon
              path={path}
              name={name}
              fill="#fff"
              size={size}
              data-test={name}
            />
          </IconPlaceHolder>
          <IconName>{name}</IconName>
        </IconContainer>
      ))}
    </GridContainer>
  </IconGrid>
)

export default DynamicIcons
