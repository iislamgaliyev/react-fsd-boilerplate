import { AuthPages } from "@constants/routes"
import { yupResolver } from "@hookform/resolvers/yup"
import {
	Button,
	Container,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from "@mantine/core"
import { Controller, useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"

import { SignInFormValues } from "../model/signin.types"
import { useSignIn } from "../model/useSignIn"
import { signInSchema } from "../model/validation.schema"

export const SignInForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormValues>({
		resolver: yupResolver(signInSchema),
	})
	const { isLoading, onSubmit } = useSignIn()
	return (
		<Container size={500} my={40}>
			<Title ta="center">Welcome back!</Title>

			<Text ta={"center"}>
				Do not have an account yet?{" "}
				<NavLink to={AuthPages.SignUp}>Create account</NavLink>
			</Text>

			<Paper withBorder shadow="sm" p={22} mt={30} radius="md">
				<form style={{ width: 400 }} onSubmit={handleSubmit(onSubmit)}>
					<Controller
						control={control}
						name="email"
						render={({ field }) => (
							<TextInput
								label="Email"
								placeholder="you@mantine.dev"
								radius="md"
								error={errors?.email?.message}
								{...field}
							/>
						)}
					/>

					<Controller
						control={control}
						name="password"
						render={({ field }) => (
							<PasswordInput
								label="Password"
								placeholder="Your password"
								mt="md"
								radius="md"
								error={errors?.password?.message}
								{...field}
							/>
						)}
					/>

					<Button
						type="submit"
						loading={isLoading}
						fullWidth
						mt="xl"
						radius="md"
					>
						Sign in
					</Button>
				</form>
			</Paper>
		</Container>
	)
}
