import { DashboardPage } from "@constants/routes"
import { useSessionStore } from "@entities/session"
import { Flex } from "@mantine/core"
import { RocketLoader } from "@ui/loaders"
import { Suspense } from "react"
import { Navigate, Outlet } from "react-router-dom"

export const AuthWrapper = () => {
	const accessToken = useSessionStore((s) => s.accessToken)
	if (accessToken) return <Navigate to={DashboardPage.Root} />
	return (
		//TODO: Replace Loader component to your custom loader
		<Suspense fallback={<RocketLoader />}>
			<Flex align={"center"} justify={"center"} w={"100%"} h={"100vh"}>
				<Outlet />
			</Flex>
		</Suspense>
	)
}
