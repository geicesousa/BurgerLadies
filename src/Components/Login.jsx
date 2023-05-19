import { useState } from "react";
import { Button, Form } from "../styles/Form.styled";
import { redirect } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");  
	const [role, setRole] = useState("");
	const urlLogin = "http://localhost:8080/login"
	const navigate = redirect();

	const handleEmail = (e) => {
	setEmail(e.target.value)
	}

	const handlePassword = (e) => {
	setPassword(e.target.value)
	}

	const handleRole = (e) => {
	setRole(e.target.value)
	}

// let getWelcome = async () =>{
// 	try {
// 		const response = await fetch(url) //reuisição
// 		const welcomeMessage = await response.json()
// 		console.log(welcomeMessage)
// 	}
// 	catch(error){
// 		console.error("capturei um erro")
// 	}
// }

// const handlesubmit = async (e) => {
// e.preventDefault()   

// const users = {
// 	name,
// 	email,
// 	password,
// 	role,
// }

// const res = await fetch(url, {
// 	method: "POST",
// 	headrs: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify(users)
// })

// }

	const createLogin = async (email, password) => {
		const dataLogin = {
		email,
		password,
		role,
		}
		const response = await fetch(urlLogin, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataLogin)
		});
		return response.json();
	} 

	const loginForm = async (e) => {
		e.preventDefault()
		try {
		const loginUser = await createLogin(email, password)
		console.log(loginUser)
		if(loginUser.user.role === 'waiter' )
		redirect('/atendente');

		} catch (error) {
		console.log(error.message);
		}
	}

return (
<>
<Form onSubmit={loginForm}>
	<label>
		<span>Selecione seu cargo</span>
		<select name="role" 
		value={role}
		onChange={handleRole}>
			<option hidden>Cargo</option>
			<option value="waiter">Garçon</option>
			<option value="chef">Chefe de cozinha</option>
			<option value="admin">Admnistrador</option>
		</select>
	</label>
	<label>
		<span>Email</span>
		<input 
			type="text" 
			value={email}
			name="email"
			placeholder="Digite seu Email" 
			onChange={handleEmail}  
		/>
	</label>	
	<label>
		<span>Senha</span>
		<input 
			type="text" 
			value={password}
			name="password"
			placeholder="Digite sua senha"
			onChange={handlePassword} 
		/>
	</label>
	<Button type="submit" value="Login">Login</Button>
</Form>
</>
)
}

export default Login;