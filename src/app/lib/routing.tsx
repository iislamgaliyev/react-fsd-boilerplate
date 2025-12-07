import { UserProvider } from "@app/providers/auth"
import { AppPages, AuthPages, DashboardPage } from "@constants/routes"
import { HomePageLazy } from "@pages/home"
import { NotFoundPageLazy } from "@pages/not-found"
import { SignInPageLazy } from "@pages/sign-in"
import { SignUpPageLazy } from "@pages/sign-up"
import { AuthWrapper, RouteGuard } from "@processes/auth"
import { createBrowserRouter, Navigate } from "react-router-dom"

export const router = createBrowserRouter([
	// *Group auth routes
	{
		path: AuthPages.Root,
		element: <AuthWrapper />,
		children: [
			{
				index: true,
				path: AuthPages.SignIn,
				element: <SignInPageLazy />,
			},
			{
				path: AuthPages.SignUp,
				element: <SignUpPageLazy />,
			},
			{
				path: AuthPages.Root,
				element: <Navigate to={AuthPages.SignIn} replace />,
			},
		],
	},
	// *Group protected routes
	{
		path: AppPages.RootPage,
		element: (
			<RouteGuard>
				<UserProvider>
					<>Hello</>
				</UserProvider>
			</RouteGuard>
		),
		children: [
			{
				path: DashboardPage.Root,
				index: true,
				element: <HomePageLazy />,
			},
			{
				path: AppPages.RootPage,
				element: <Navigate to={DashboardPage.Root} />,
			},
		],
	},
	{
		path: AppPages.NotFoundPage,
		element: <NotFoundPageLazy />,
	},
	{
		path: AppPages.AnyPage,
		element: <Navigate replace to={AppPages.NotFoundPage} />,
	},
])
