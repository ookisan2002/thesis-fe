// import authApiRequest from '@/apiRequests/auth'
// import { HttpError } from '@/lib/http'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
	// const cookieStore = cookies()
	// const sessionToken = cookieStore.get('sessionToken')
	const res = await request.json()
	console.log(new Date(res.expiredAt).toUTCString())
	// return Response.json({ res })

	return Response.json({ res }, {
		status: 200,
		headers: {
			'Set-Cookie': `token=${res.token}; Path=/; HttpOnly; Expires=${new Date(res.expiredAt).toUTCString()}; SameSite=Lax; Secure`
		},
	})
}