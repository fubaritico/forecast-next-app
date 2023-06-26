import { AxiosError } from 'axios'

export type RequestResponse<T> = T | AxiosError

export const isAxiosError = <T>(res: RequestResponse<T>): res is AxiosError =>
  typeof (res as unknown as AxiosError).isAxiosError !== 'undefined'

export { AxiosError }
