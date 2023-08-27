import { ParsedUrlQuery } from 'querystring'
import { ReactElement } from 'react'

export const nestLayouts: NestedLayoutCallback =
  (parent: GetLayoutCallback, child: GetLayoutCallback) =>
  (page: ReactElement) =>
    parent(child(page))

/**
 * Issues when getting query parameters
 * @param params ParsedUrlQuery
 */
export function getUrlSearchParams(params?: ParsedUrlQuery): URLSearchParams {
  const urlSearchParams = new URLSearchParams()

  if (params) {
    Object.keys(params).forEach((key) =>
      urlSearchParams.append(key, params[key] as string)
    )
  }

  return urlSearchParams
}
