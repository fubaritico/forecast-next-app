'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ReactDOM.preconnect('https://decision.flagship.io')

  return null
}
