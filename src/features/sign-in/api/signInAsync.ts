import clientApi from "@shared/api/base-api"
import { AxiosResponse } from "axios"

import { SignInFormValues, SignInResponse } from "../model/signin.types"

export const signInAsync = async (data: SignInFormValues) => {
	const res = await clientApi.post<AxiosResponse<SignInResponse>>(
		//TODO: put your backend API
		"your_backend_api",
		data,
	)
	return res.data.data
}
