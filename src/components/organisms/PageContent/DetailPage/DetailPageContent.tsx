import React, { FC } from 'react'
import CurrentObservationPanel from '@Organisms/CurrentObservationPanel'

export type DetailPageContentProps = {
  data: GetDetailedForecatsResponse
}

const DetailPageContent: FC<DetailPageContentProps> = ({ data }) => (
  <CurrentObservationPanel data={data} />
)

export default DetailPageContent
