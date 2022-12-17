
import { useState } from "react"
import Login from "../components/Login"
import Register from "../components/Register"
import '../styles/auth.css'


const Auth = props => {
	const [ tab,setTab ] = useState('login')
	return(
		<div id="auth-container">
			<div id="auth-form-container">
				<div id="auth-container-nav">
					<strong onClick={() => setTab(() => 'login')}>Login</strong>
					<strong onClick={() => setTab(() => 'reg')}>Register</strong>
				</div>
				{ tab === 'login' ? <Login/>:<Register/> }
			</div>
		</div>
	)
}




export default Auth
