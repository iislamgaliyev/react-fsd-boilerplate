import { EnvKeys } from "@constants/env"
import axios from "axios"

const clientApi = axios.create({
	//* use .env file for safety purposes, constant is used as an example
	baseURL: EnvKeys.VITE_HOST,
})
export default clientApi
