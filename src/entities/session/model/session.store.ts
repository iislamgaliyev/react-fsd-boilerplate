import { create } from "zustand"

const initialState: SessionState = {
	accessToken: null,
	refreshToken: null,
}
export const useSessionStore = create<SessionState & SessionActions>((set) => ({
	...initialState,
	setAccessToken: (token) => set({ accessToken: token }),
	clearSession: () => set(initialState),
}))
