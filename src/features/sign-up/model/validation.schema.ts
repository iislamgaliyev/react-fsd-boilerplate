import * as Yup from "yup"

export const signUpSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters long")
		.required("Password is required"),
	repeatPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords do not match")
		.required("Please confirm your password"),
})
