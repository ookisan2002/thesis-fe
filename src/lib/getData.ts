import {env} from './environment'

type Request = {
  api: string
  option?: any
}
export default async function getData(request: Request) {
  try {
    const res = await fetch(`${env.API}${request.api}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...request.option,
      },
    })
    // Check if the response is not okay
    if (!res.ok) {
      return null
    }

    // Parse and return the JSON response
    return await res.json()
  } catch (error: unknown) {
    // Convert the error to a string or handle based on its type
    const errorMessage = error instanceof Error ? error.message : String(error)
    throw new Error(`${env.API}${request.api}: ${errorMessage}`)
  }
}

type DataPost = {
  api: string
  body?: FormData
}

export async function postData(data: DataPost) {
  try {
    const res = await fetch(`${env.API}${data.api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    // Check if the response is not okay
    if (!res.ok) {
      return null
    }

    // Parse and return the JSON response
    return await res.json()
  } catch (error: unknown) {
    // Convert the error to a string or handle based on its type
    const errorMessage = error instanceof Error ? error.message : String(error)
    throw new Error(`${env.API}${data.api}: ${errorMessage}`)
  }
}
