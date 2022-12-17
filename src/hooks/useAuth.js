

import { useEffect, useState } from "react"
import { login, register } from "../services/auth"



const useAuth = props => {

	const [ isAuth,setIsAuth ] = useState(false)

	const autenticate = (data,callback) => {
		login({
			email:data.email,
			password:data.password
		})
			.then(res => { callback(res.data.data.token) })
			.catch(err => { callback(null) })
	}

	const createUser = (data,callback) => {
		register({
			username:data.username,
			email:data.email,
			password:data.password
		})
			.then(res => { callback(res.data.data.token) })
			.catch(err => { callback(null) })
	}

	useEffect(() => {
		if(localStorage.getItem('token') !== null) {
			setIsAuth(() => true)
		}
	},[])

	return { autenticate,createUser,isAuth }

}


export default useAuth


