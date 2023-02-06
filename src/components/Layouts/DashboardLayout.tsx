import { FC, PropsWithChildren, ReactElement } from 'react'
import { Container, Row } from 'react-grid-system'
import { LeftContentCol, RightContentCol } from './DashboardLayout.styled'

type DashboardLayoutProps = PropsWithChildren<{
  children: ReactElement // Will be the NextPageWithLayout component
}>

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => (
  <>
    {children}
    <Container>
      <Row debug>
        <LeftContentCol lg={4}>test</LeftContentCol>
        <RightContentCol lg={8}>test</RightContentCol>
      </Row>
    </Container>
  </>
)
export default DashboardLayout
