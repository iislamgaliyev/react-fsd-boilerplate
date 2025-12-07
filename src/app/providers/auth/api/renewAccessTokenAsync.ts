import clientApi from "@shared/api/base-api"
import { AxiosResponse } from "axios"

import { RefreshTokenResponse } from "../model/auth.types"

export const renewAccessToken = async () => {
	const res = await clientApi.post<AxiosResponse<RefreshTokenResponse>>(
		//TODO: put your backend API
		"your_backend_api",
	)
	return res.data.data
}
