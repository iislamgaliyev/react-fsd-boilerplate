import clientApi from "@shared/api/base-api"
import { AxiosResponse } from "axios"

import { CreateUserDTO, SignUpResponse } from "../model/signup.types"

export const signUpAsync = async (data: CreateUserDTO) => {
	const res = await clientApi.post<AxiosResponse<SignUpResponse>>(
		//TODO: put your backend API
		"your_backend_api",
		data,
	)
	return res.data.data
}
