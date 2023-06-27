import { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

type Sizes = 'small' | 'medium' | 'large'

type IconContainerProps = {
  className?: string
  size?: Sizes
  centered?: boolean
}

const setMaxWidth = (size?: Sizes): string => {
  switch (size) {
    case 'small':
      return '50px'
    case 'medium':
      return '100px'
    case 'large':
      return '150px'
    default:
      return 'unset'
  }
}

const IconContainer: FC<PropsWithChildren<IconContainerProps>> = ({
  centered,
  children,
  className,
  size,
}) => (
  <div
    className={clsx(
      `flex flex-col items-center flex-1 border-2 border-appLightGrey2 rounded-[3px] max-w-[${setMaxWidth(
        size
      )}]`,
      { 'my-0 mx-auto': centered },
      className
    )}
  >
    {children}
  </div>
)

export default IconContainer
