import { NextResponse } from 'next/server'
import { getObservationDetailsRequest } from '@Requests/getObservationDetailsRequest'

type Params = {
  params: {
    cityName: string
  }
}

/**
 * Route handlers are called on client side, extract the api/mapping process elsewhere
 *
 * @param request
 * @param params
 * @constructor
 */
export async function GET(request: Request, { params }: Params) {
  console.log('/api/weatherbit/forecasts/detail - params: ', params)

  const data = await getObservationDetailsRequest({ params })
  console.log('/api/weatherbit/forecasts/detail - data: ', data)

  return NextResponse.json({ data })
}
