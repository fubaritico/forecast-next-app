import type { NextApiRequest, NextApiResponse } from 'next'
import { getDefaultObservationsRequest } from '@Api/getDefaultObservationsRequest'
import { AxiosError } from 'axios'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  api: {
    externalResolver: true,
  },
}

// IMPORTANT: API route not in use for now
// TODO : later implement react-query

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetCurrentDefaultObservationsAxiosResponse>
) {
  try {
    const response = await getDefaultObservationsRequest()
    res.status(200).send(response)
  } catch (error: unknown) {
    res.status(500).send(error as AxiosError)
  }
}
