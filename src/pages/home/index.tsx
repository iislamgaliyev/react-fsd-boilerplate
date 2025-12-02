import { Button } from "@mantine/core"

import s from "./styles.module.scss"

const HomePage = () => {
	return (
		<div className={s.wrapper}>
			<h1>React + Typescript + Vite</h1>
			<Button>Hello</Button>
		</div>
	)
}

export default HomePage
