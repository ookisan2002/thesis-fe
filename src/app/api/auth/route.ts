export async function POST(request: Request) {
	// const cookieStore = cookies()
	// const sessionToken = cookieStore.get('sessionToken')
	const res = await request.json()
	// return Response.json({ res })

	return Response.json({ res }, {
		status: 200,
		headers: {
			'Set-Cookie': `token=${res.token}; Path=/; HttpOnly; Expires=${new Date(res.expiredAt).toUTCString()}; SameSite=Lax; Secure`
		},
	})
}