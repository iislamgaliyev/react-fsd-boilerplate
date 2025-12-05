import compose from "compose-function"

import { WithMantineProvider } from "./with-mantine-provider"
import { WithReactQuery } from "./with-react-query"
import { WithRouter } from "./with-router"
import { WithToastify } from "./with-toastify"

export const withHocs = compose(
	WithMantineProvider,
	WithReactQuery,
	WithToastify,
	WithRouter,
)
