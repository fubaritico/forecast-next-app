// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getWeather, {ForeCasts, GetWeatherParams} from "../../../lib/getWeather";
export const config = {
    api: {
        externalResolver: true
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ForeCasts>
) {
    try {
        const response = await getWeather(req.query as GetWeatherParams)
        res.status(200).send(response.data)
    } catch(error) {
        res.status(500).send(error as ForeCasts)
    }
}
