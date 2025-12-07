import { Button } from "@mantine/core"
import { useNavigate } from "react-router-dom"

import s from "./styles.module.scss"
import { BurgerIcon } from "./ui"

const NotFoundPage = () => {
	const navigate = useNavigate()
	const handleReturn = () => {
		navigate(-1)
	}

	return (
		<div className={s.wrapper}>
			<BurgerIcon />
			<div className={s.text}>404 Page Not Found</div>
			<Button onClick={handleReturn}>Return Back</Button>
		</div>
	)
}

export default NotFoundPage
