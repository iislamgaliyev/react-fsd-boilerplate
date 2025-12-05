import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr()],
	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src/app"),
			"@styles": path.resolve(__dirname, "src/shared/styles"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@entities": path.resolve(__dirname, "src/entities"),
			"@features": path.resolve(__dirname, "src/features"),
			"@widgets": path.resolve(__dirname, "src/widgets"),
			"@processes": path.resolve(__dirname, "src/processes"),
			"@ui": path.resolve(__dirname, "src/shared/ui"),
			"@constants": path.resolve(__dirname, "src/shared/constants"),
			"@libs": path.resolve(__dirname, "src/shared/libs"),
			"@assets": path.resolve(__dirname, "src/shared/assets"),
			"@types": path.resolve(__dirname, "src/shared/types"),
			"@shared": path.resolve(__dirname, "src/shared"),
		},
	},
	server: {
		open: true,
	},
})
