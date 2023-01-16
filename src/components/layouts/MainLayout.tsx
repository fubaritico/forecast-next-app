import { FC } from 'react'
import Default from './MainLayout.styled'

const MainLayout: FC<LayoutPageProps> = ({ children }) => (
  // here can be called hooks for defalut page initialisation
  // Can contain, nav, headers, footer, etc
  <>
    <link rel="preconnect" href="https://decision.flagship.io" />
    <Default>{children}</Default>
  </>
)

export default MainLayout
