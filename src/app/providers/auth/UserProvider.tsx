import { useSessionStore } from "@entities/session"
import clientApi from "@shared/api/base-api"
import { AxiosError, InternalAxiosRequestConfig } from "axios"
import { PropsWithChildren, useLayoutEffect } from "react"

import { useRenewAccessToken } from "./hooks/useRenewAccessToken"

export const UserProvider = ({ children }: PropsWithChildren) => {
	const [accessToken] = useSessionStore((s) => [s.accessToken, s.clearSession])
	const { renewAccessToken } = useRenewAccessToken()

	useLayoutEffect(() => {
		const requestInterceptor = clientApi.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				if (accessToken && !config.headers.Authorization) {
					config.headers.Authorization = `Bearer ${accessToken}`
				}
				return config
			},
		)
		return () => {
			clientApi.interceptors.request.eject(requestInterceptor)
		}
	}, [accessToken])

	useLayoutEffect(() => {
		const responseInterceptor = clientApi.interceptors.response.use(
			(response) => response,
			async (error: AxiosError) => {
				const originalRequest = error.config as InternalAxiosRequestConfig & {
					_retry?: boolean
				}
				if (error.response?.status === 401 && !originalRequest?._retry) {
					originalRequest._retry = true
					renewAccessToken()
				}
				return Promise.reject(error)
			},
		)

		return () => {
			clientApi.interceptors.response.eject(responseInterceptor)
		}
	}, [])

	return <>{children}</>
}
