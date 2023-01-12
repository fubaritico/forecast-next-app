// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getWeather, {
  ForeCastsResponse,
  GetWeatherParams,
} from '@Requests/getWeather'

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ForeCastsResponse>
) {
  try {
    const response = await getWeather(req.query as GetWeatherParams)
    res.status(200).send(response.data)
  } catch (error) {
    res.status(500).send(error as ForeCastsResponse)
  }
}
