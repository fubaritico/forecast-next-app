import React, { useState, useEffect, useRef, FC } from 'react'
import { ReactComponent as PlaceHolderIcon } from '@Svg/weather/small/placeholder.svg'

export type DynamicIconProps = {
  path: string
  name: string
  size?: number
  fill?: string
}

const DynamicIcon: FC<DynamicIconProps> = ({
  path,
  name,
  size = 16,
  fill = '#000',
  ...rest
}) => {
  const ImportedIconRef = useRef<LazyIcon>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        const { ReactComponent: namedImport } = await import(
          `../../svg/${path}/${name}.svg`
        )
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ImportedIconRef.current = namedImport
        // eslint-disable-next-line no-useless-catch
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [path, name])

  if (loading) {
    return <PlaceHolderIcon width={size} height={size} fill={fill} {...rest} />
  }

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef
    return <ImportedIcon width={size} height={size} fill={fill} {...rest} />
  }

  return null
}

export default DynamicIcon
