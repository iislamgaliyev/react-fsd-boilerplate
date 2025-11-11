import ReactDOM from "react-dom/client"

import App from "./app"
import { ErrorBoundary } from "./shared/ui/errors"

const rootElement = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(rootElement).render(
	// @ts-ignore
	<ErrorBoundary>
		<App />
	</ErrorBoundary>,
)
