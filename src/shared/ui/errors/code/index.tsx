import { useTranslation } from "react-i18next"

import s from "./index.module.scss"
import { Button } from "@mantine/core"

export const CodeErrorComponent = () => {
	const { t } = useTranslation()
	const reload = () => {
		location.reload()
	}
	return (
		<div className={s.errorPage}>
			<div>{t("error_occured")}</div>
			<Button onClick={reload}>{t("reload_page")}</Button>
		</div>
	)
}
