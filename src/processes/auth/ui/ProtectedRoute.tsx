import { AuthPages } from "@constants/routes"
import { useSessionStore } from "@entities/session"
import { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"

export const RouteGuard = ({ children }: PropsWithChildren) => {
	const accessToken = useSessionStore((s) => s.accessToken)
	if (!accessToken) return <Navigate to={AuthPages.Root} />
	return <>{children}</>
}
