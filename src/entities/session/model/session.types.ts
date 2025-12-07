type SessionState = {
	accessToken: string | null
	refreshToken: string | null
	isLoading: boolean
}

interface SessionActions {
	setAccessToken: (token: string) => void
	setLoading: (loading: boolean) => void
	clearSession: () => void
}
