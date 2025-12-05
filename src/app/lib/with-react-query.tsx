import { queryClient } from "@libs/query-client"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { FC } from "react"

export const WithReactQuery = (Component: FC) => () => (
	<QueryClientProvider client={queryClient}>
		<Component />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
)
