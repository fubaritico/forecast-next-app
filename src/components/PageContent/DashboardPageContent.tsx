import { FC, PropsWithChildren } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import {
  LeftContentCol,
  RightContentCol,
} from '@Layouts/DashboardLayout.styled'

const DashboardPageContent: FC<PropsWithChildren> = () => (
  <>
    <Container>
      <Row debug>
        <LeftContentCol lg={4}>
          <Row>
            Search Autocomplete component using Google Places API to change
            location
          </Row>
          <Row>Details view of current observation</Row>
        </LeftContentCol>
        <RightContentCol lg={8}>
          <Row>Detailed Chart Hourly temperatures (next 14 hours)</Row>
          <Row>
            Detailed Chart For Some Other Hourly Data (next 14 hours) (maybe
            selectable)
          </Row>
          <Row>
            <header>Highlights</header>
            <Col>Chart for UV index</Col>
            <Col>Chart for Air visibility</Col>
            <Col>Chart for wind speed and other wind information</Col>
          </Row>
        </RightContentCol>
      </Row>
    </Container>
  </>
)

export default DashboardPageContent
