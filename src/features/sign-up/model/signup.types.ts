import * as Yup from "yup"

import { signUpSchema } from "./validation.schema"

export type SignUpFormValues = Yup.InferType<typeof signUpSchema>
export type CreateUserDTO = Pick<SignUpFormValues, "email" | "password">
export type SignUpResponse = {}
