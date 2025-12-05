import { RocketLoader } from "@ui/loaders"
import { RouterProvider } from "react-router-dom"

import { router } from "./routing"

export const WithRouter = () => () => (
	<RouterProvider router={router} fallbackElement={<RocketLoader />} />
)
