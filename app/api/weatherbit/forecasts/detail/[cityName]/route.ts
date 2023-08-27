import { NextResponse } from 'next/server'
import getApiRequestConfig from '@AppAPI/getApiRequestConfig'

type Params = {
  params: {
    cityName: string
  }
}
export async function GET(request: Request, { params }: Params) {
  console.log('/api/weatherbit/forecasts/detail - request: ', request)
  console.log('/api/weatherbit/forecasts/detail - params: ', params)

  const requestParams = {
    city: params.cityName.split('-')[0],
    country: params.cityName.split('-')[1],
  }

  const { headers, hostname, method, path } = getApiRequestConfig(
    requestParams,
    '/current'
  )

  console.log('/api/weatherbit/forecasts/detail - path: ', path)
  console.log('/api/weatherbit/forecasts/detail - headers: ', headers)

  const res = await fetch(`https://${hostname}${path}`, {
    headers,
    method,
    next: { revalidate: 3600 },
  })

  const data = await res.json()

  console.log('/api/weatherbit/forecasts/detail - data: ', data)

  return NextResponse.json({ data })
}
