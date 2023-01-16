import { FC, PropsWithChildren, useRef, useState, useEffect } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import Default from './Map.styled'

interface MapProps extends google.maps.MapOptions {
  style?: { [key: string]: string }
  onClick?: (e: google.maps.MapMouseEvent) => void
  onIdle?: (map: google.maps.Map) => void
}
const Map: FC<PropsWithChildren<MapProps>> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useDeepCompareEffect(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new google.maps.Map(ref.current, {
          center: { lat: -34, lng: 151 },
          zoom: 8,
        })
      )
    }
  }, [ref, map])

  useEffect(() => {
    if (map) {
      google.maps.event.trigger(map, 'resize')
      ;['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      )

      if (onClick) {
        map.addListener('click', onClick)
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map))
      }
    }
  }, [map, onClick, onIdle])

  return <Default ref={ref} style={style} />
}

export default Map
