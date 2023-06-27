import { FC, PropsWithChildren, useRef, useState, useEffect } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'

export interface MapProps extends google.maps.MapOptions {
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
          clickableIcons: false,
          fullscreenControl: false,
          mapTypeControl: false,
          panControl: false,
          rotateControl: false,
          scaleControl: false,
          streetViewControl: false,
          zoomControl: false,
        })
      )
    }
  }, [ref, map, window.google.maps]) // window.google.maps has to be kept (storybook)

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

  return <div className="h-[400px] w-[400px]" ref={ref} style={style} />
}

export default Map
