import { create } from "zustand"

const initialState: SessionState = {
	isLoading: false,
	accessToken: null,
	refreshToken: null,
}
export const useSessionStore = create<SessionState & SessionActions>((set) => ({
	...initialState,
	setAccessToken: (token) => set({ accessToken: token }),
	setLoading: (isLoading) => set({ isLoading }),
	clearSession: () => set(initialState),
}))
