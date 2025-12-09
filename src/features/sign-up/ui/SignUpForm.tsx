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

import { SignUpFormValues } from "../model/signup.types"
import { useSignUp } from "../model/useSignUp"
import { signUpSchema } from "../model/validation.schema"

export const SignUpForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormValues>({
		resolver: yupResolver(signUpSchema),
	})
	const { onSubmit, isLoading } = useSignUp()

	return (
		<Container size={500} my={40}>
			<Title ta="center">Welcome back!</Title>
			<Text ta={"center"}>
				Already have an account? <NavLink to={AuthPages.SignIn}>Login</NavLink>
			</Text>

			<Paper withBorder shadow="sm" p={22} mt={30} radius="md">
				<form style={{ width: 400 }} onSubmit={handleSubmit(onSubmit)}>
					<Controller
						control={control}
						name="email"
						render={({ field }) => (
							<TextInput
								label="Email"
								placeholder="you@email.dev"
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

					<Controller
						control={control}
						name="repeatPassword"
						render={({ field }) => (
							<PasswordInput
								label="Repeat password"
								placeholder="Your password"
								mt="md"
								radius="md"
								error={errors?.repeatPassword?.message}
								{...field}
							/>
						)}
					/>

					<Button
						loading={isLoading}
						type="submit"
						fullWidth
						mt="xl"
						radius="md"
					>
						Sign Up
					</Button>
				</form>
			</Paper>
		</Container>
	)
}
