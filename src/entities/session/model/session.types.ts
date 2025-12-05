type SessionState = {
	accessToken: string | null
	refreshToken: string | null
}

interface SessionActions {
	setAccessToken: (token: string) => void
	clearSession: () => void
}
