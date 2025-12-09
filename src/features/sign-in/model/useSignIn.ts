import { DashboardPage } from "@constants/routes"
import { useSessionStore } from "@entities/session"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import { signInAsync } from "../api/signInAsync"
import { SignInFormValues } from "./signin.types"

export const useSignIn = (onSuccess?: () => void) => {
	const setAccessToken = useSessionStore((s) => s.setAccessToken)
	const navigate = useNavigate()
	const onSubmit = ({ email, password }: SignInFormValues) => {
		mutate({ email, password })
	}
	const { mutate, isLoading } = useMutation({
		mutationFn: (data: SignInFormValues) => signInAsync(data),
		onSuccess: (data) => {
			setAccessToken(data.accessToken)
			navigate(DashboardPage.Root)
			onSuccess?.()
		},
		onError: () => {
			//* Handle error
		},
	})
	return { isLoading, onSubmit }
}
