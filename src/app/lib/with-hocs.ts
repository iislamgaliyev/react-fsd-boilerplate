import compose from "compose-function"

import { WithMantineProvider } from "./with-mantine-provider"
import { WithReactquery } from "./with-react-query"
import { WithRouter } from "./with-router"
import { WithToastify } from "./with-toastify"

export const withHocs = compose(
	WithMantineProvider,
	WithReactquery,
	WithToastify,
	WithRouter,
)
