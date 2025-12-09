import { AuthPages } from "@constants/routes"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import { signUpAsync } from "../api/signupAsync"
import { CreateUserDTO, SignUpFormValues } from "./signup.types"

export const useSignUp = (onSuccess?: () => void) => {
	const navigate = useNavigate()
	const onSubmit = ({ email, password }: SignUpFormValues) => {
		mutate({ email, password })
	}
	const { mutate, isLoading } = useMutation({
		mutationFn: (data: CreateUserDTO) => signUpAsync(data),
		onSuccess: () => {
			navigate(AuthPages.Root)
			onSuccess?.()
		},
		onError: () => {
			//* Handle error
		},
	})
	return { isLoading, onSubmit }
}
