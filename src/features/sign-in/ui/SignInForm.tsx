import { AuthPages } from "@constants/routes"
import {
	Button,
	Container,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from "@mantine/core"
import { NavLink } from "react-router-dom"

export const SignInForm = () => {
	return (
		<Container size={500} my={40}>
			<Title ta="center">Welcome back!</Title>

			<Text ta={"center"}>
				Do not have an account yet?{" "}
				<NavLink to={AuthPages.SignUp}>Create account</NavLink>
			</Text>

			<Paper withBorder shadow="sm" p={22} mt={30} radius="md">
				<form style={{ width: 400 }}>
					<TextInput
						label="Email"
						placeholder="you@mantine.dev"
						required
						radius="md"
					/>
					<PasswordInput
						label="Password"
						placeholder="Your password"
						required
						mt="md"
						radius="md"
					/>
					<Button fullWidth mt="xl" radius="md">
						Sign in
					</Button>
				</form>
			</Paper>
		</Container>
	)
}
