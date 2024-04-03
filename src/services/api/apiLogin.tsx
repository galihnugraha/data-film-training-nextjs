'use server'

import { satellite } from "@services/satellite"
import { create } from "@store/cookies"

type DataBodyLogin = {
  email: string
  password: string
}

const apiLogin = async (body: DataBodyLogin) => (
  await satellite.post("https://api-otoransi-dev.berijalan.id/rest/v1/auth/login", body, {
    headers: {
      "Content-Type": "application/json",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
      "api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
  })
  .then(res => {
    console.log(JSON.stringify(res.data.data[0], null, 2))
    create('__TOKEN__', res.data.data[0].tokenSession)
    
    const storageData = res.data.data[0]
    delete storageData.tokenSession

    return {status: 'success', data: storageData}
  })
  .catch(err => {
    console.log(JSON.stringify(err.response, null, 2))
    throw err.response.data
  })
  .finally(() => {
    console.log("REQUEST DONE")
  })
)

export default apiLogin