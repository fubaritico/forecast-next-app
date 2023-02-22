import dynamic from 'next/dynamic'

import { ReactComponent as PlaceHolderIcon } from '@Svg/weather/small/placeholder.svg'
// TODO Lors du passage à react 18 - IVTS-19935, changer le mode pour suspense
// https://nextjs.org/docs/advanced-features/dynamic-import#with-suspense

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
