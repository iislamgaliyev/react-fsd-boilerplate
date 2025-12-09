import * as Yup from "yup"

import { signInSchema } from "./validation.schema"

export type SignInFormValues = Yup.InferType<typeof signInSchema>
export type SignInResponse = { accessToken: string }
