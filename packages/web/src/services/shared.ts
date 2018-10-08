import { create } from "apisauce"

import { getState, select } from "../store"

export const http = create({
  baseURL: process.env.FIREBASE_FUNCTIONS_API_URL_V1,
  headers: { Accept: "application/json" },
})

http.addAsyncRequestTransform(async request => {
  request.headers = request.headers || {}
  const accessToken = select.session.accessToken(getState())
  request.headers.Authorization = `Bearer ${accessToken}`

  return request
})
