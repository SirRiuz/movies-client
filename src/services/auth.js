
import axios from "axios"
import SETTINGS from "../settings"


const login = data => {
	const URL = SETTINGS.API_URL + `/auth/login/`
	const DATA = JSON.stringify(data)

	return axios.post(URL,DATA,{
		headers:{ 'Content-Type': 'application/json' }
	})
}

const register = data => {
	const URL = SETTINGS.API_URL + `/auth/register/`
	const DATA = JSON.stringify(data)

	return axios.post(URL,DATA,{
		headers:{ 'Content-Type': 'application/json' }
	})
}



const checkCredentials = data => {}




export { login,register,checkCredentials }

