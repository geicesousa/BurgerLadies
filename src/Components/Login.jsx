import { useState } from "react";
import { Form, Button } from "../styles/Login.styled";


function Login() {
	const[login, setLogin] = useState()
	const[password, setPassword] = useState()
	const [role, setRole] = useState()

	const handleLogin = (e) => {
		setLogin(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleRole = (e) => {
		setRole(e.target.value)
	}

	function sendLogin(e) {
		e.preventDefault()	
		console.log("enviando")	
		console.log(login, password, role)	
	}

	return (
	<>
	<Form onSubmit={sendLogin}>
		<label>
			<span>Selecione seu cargo</span>
			<select name="role" 
			onChange={handleRole}>
				<option disabled="disabled" value="role">Cargo</option>
				<option value="garcon">Garçon</option>
				<option value="chefe">Chefe de cozinha</option>
				<option value="adm">Admnistrador</option>
			</select>
		</label>
		<label>
			<span>Login</span>
			<input 
				type="text" 
				placeholder="Digite seu login" 
				onChange={handleLogin}  
			/>
		</label>
		
		<label>
			<span>Senha</span>
			<input 
				type="text" 
				placeholder="Digite sua senha"
				onChange={handlePassword} 
			/>
		</label>
		<Button type="submit">
		Login
		</Button>		
	</Form>
	</>
  )
}
export default Login