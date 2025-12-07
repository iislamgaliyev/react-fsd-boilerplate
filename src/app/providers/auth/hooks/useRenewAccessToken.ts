import { AuthPages } from "@constants/routes"
import { useSessionStore } from "@entities/session"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { renewAccessToken } from "../api/renewAccessTokenAsync"

export const useRenewAccessToken = () => {
	const navigate = useNavigate()
	const [setAccessToken, setLoading, clearSession] = useSessionStore((s) => [
		s.setAccessToken,
		s.setLoading,
		s.clearSession,
	])
	const { mutate, isLoading } = useMutation({
		mutationFn: renewAccessToken,
		onSuccess: (data) => {
			//* Update accessToken
			setAccessToken(data.accessToken)
		},
		onError: () => {
			//* Failing to get access token
			clearSession()
			navigate(AuthPages.Root)
		},
	})

	useEffect(() => {
		setLoading(isLoading)
	}, [isLoading, setLoading])

	return { renewAccessToken: mutate }
}
