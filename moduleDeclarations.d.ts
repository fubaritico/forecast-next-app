declare module '*.png' {
  const content: any
  export default content
}

declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  const content: string

  export { ReactComponent }
  export default content
}
