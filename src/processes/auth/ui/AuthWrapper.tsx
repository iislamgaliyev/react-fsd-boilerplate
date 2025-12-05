import { DashboardPage } from "@constants/routes"
import { useSessionStore } from "@entities/session"
import { Navigate, Outlet } from "react-router-dom"

export const AuthWrapper = () => {
	// *Implement redirect to dashboard page if token is valid
	const accessToken = useSessionStore((s) => s.accessToken)
	if (accessToken) return <Navigate to={DashboardPage.Root} />
	return (
		<div>
			<Outlet />
		</div>
	)
}
