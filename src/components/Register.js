

import { Alert, AlertTitle, Button, TextField } from "@mui/material"
import { useRef, useState } from "react"
import useAuth from "../hooks/useAuth"



const Register = props => {
	const { createUser } = useAuth()
	const [ error,setError ] = useState(false)
	const [ email,setEmail ] = useState('')
	const [ password,setPassword ] = useState('')
	const [ userName,setUname ] = useState('')



	const onRegister = e => {
		e.preventDefault()
		setError(() => false)
		createUser({
			username:userName,
			email:email,
			password:password
		},(token) => {
			if(token === null) {
				setError(() => true)
			} else {
				localStorage.setItem('token',token)
				window.location = '/'
			}
		})	
	}


	return(
		<div>
			<form onSubmit={onRegister}>
				<div>
					<TextField
						style={{ width:'100%' }}
						required
						label="Username"
						type={"text"}
						placeholder="Username"
						onChange={(e) => { setUname(() => e.target.value)}}
					/>
				</div>
				<br/>
				<div>
					<TextField
						style={{ width:'100%' }}
						required
						label="Email"
						type={"email"}
						placeholder="Email"
						onChange={(e) => { setEmail(() => e.target.value)}}
					/>
				</div>
				<br/>
				<div>
					<TextField
						style={{ width:'100%' }}
						required
						label="Password"
						type={"password"}
						placeholder="Password"
						onChange={(e) => { setPassword(() => e.target.value)}}
					/>
				</div>
				<br/>
				<div style={{ textAlign:'start' }}>
					{ error ? (
						<Alert severity="error">
							<AlertTitle>Error de autenticacion</AlertTitle>
							El usuario o el correo ya existen
						</Alert>
					):null }
				</div>
				<br/>
				<Button style={{ width:'100%' }} type="submit" variant="outlined">Register</Button>
			</form>
		</div>
	)
}


export default Register