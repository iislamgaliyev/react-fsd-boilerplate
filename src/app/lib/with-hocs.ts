import compose from "compose-function"

import { WithReactquery } from "./with-react-query"
import { WithRouter } from "./with-router"
import { WithToastify } from "./with-toastify"
import { WithMantineProvider } from "./with-mantine-provider"

export const withHocs = compose(WithMantineProvider, WithReactquery, WithToastify, WithRouter)
