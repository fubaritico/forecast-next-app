import { FC, PropsWithChildren } from 'react'
import { Container, Row, Col } from 'react-grid-system'

type DetailPageContentProps = {
  detailedForecasts: MappedForecastDay
}

const DetailPageContent: FC<PropsWithChildren<DetailPageContentProps>> = () => (
  <>
    <Container>
      <Row debug>
        <Col>Resumed view for current observation</Col>
        <Col>Detailed view with extra information and forecasts</Col>
      </Row>
    </Container>
  </>
)

export default DetailPageContent
