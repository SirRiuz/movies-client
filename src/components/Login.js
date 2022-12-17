import { Alert, AlertTitle, Button, TextField } from "@mui/material"
import { useRef, useState } from "react"
import useAuth from "../hooks/useAuth"



const Login = props => {
	const [ error,setError ] = useState(false)
	const { autenticate } = useAuth()
	const [ email,setEmail ] = useState('')
	const [ password,setPassword ] = useState('')


	const onAuth = e => {
		e.preventDefault()
		setError(() => false)
		autenticate({
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
			<form onSubmit={onAuth}>
				<div>
					<TextField
						required
						label="Email"
						type={"email"}
						placeholder="Email"
						style={{ width:'100%' }}
						onChange={(e) => { setEmail(() => e.target.value)}}
					/>
				</div>
				<br></br>
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
				<br></br>
				
				<div style={{ textAlign:'start' }}>
					{ error ? (
					<Alert severity="error">
						<AlertTitle>Error de autenticacion</AlertTitle>
						El correo o la contaseña no son correctos
					</Alert>
					):null }
				</div>
				<br></br>
				<div>
					<Button style={{ width:'100%' }} type="submit" variant="outlined">Login</Button>
				</div>
			</form>
		</div>
	)
}




export default Login
