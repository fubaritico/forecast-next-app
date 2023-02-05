import { FC, PropsWithChildren } from 'react'
import Default from './MainLayout.styled'

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  // here can be called hooks for default page initialisation
  // Can contain, nav, headers, footer, etc
  <>
    <link rel="preconnect" href="https://decision.flagship.io" />
    <Default>{children}</Default>
  </>
)

export default MainLayout
