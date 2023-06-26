import dynamic from 'next/dynamic'

import { ReactComponent as PlaceHolderIcon } from '@Svg/weather/small/placeholder.svg'

const svgLazyLoader = (subPath: string): LazyIcon => {
  const DynamicComponent = dynamic(
    async () =>
      (await import(`../svg/${subPath.replace(/\.svg$/, '')}.svg`))
        .ReactComponent,
    { loading: () => <PlaceHolderIcon />, ssr: false }
  )

  const SuspenseLazySVG: LazyIcon = (props: LazyIconProps) => (
    <DynamicComponent {...props} />
  )

  return SuspenseLazySVG
}

export default svgLazyLoader
