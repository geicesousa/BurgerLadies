import { useState } from "react";
import { Button, Form } from "../styles/Form.styled";
import { getErrorMessage } from "../error/errorLogin.js";
import { ErrorDiv } from '../styles/ErrorMessage.styled.js'
import { useNavigate } from "react-router-dom";


const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");  
	const [role, setRole] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const urlLogin = "http://localhost:8080/login"
	const navigate = useNavigate();

	const handleEmail = (e) => {
	setEmail(e.target.value)
	}

	const handlePassword = (e) => {
	setPassword(e.target.value)
	}

	const handleRole = (e) => {
	setRole(e.target.value)
	}


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
		})
		return response.json();
	}

	// Login mudado	
	const logar = (e) => {
		e.preventDefault();
		createLogin(email, password).then((response) => {			
			const data = response.json();
			if (response.status === 200) {
				return data.then((object) => {
					// console.log(object)
					if (object.user.role === 'waiter') {
						return navigate('./atendente')
					}
					else if(object.user.role === 'admin') {
						return navigate('./admin')
					}
					// else if(object.user.role === 'chef') {
					// 	return navigate('./')
					// }
				})
			}
			else if (response.status !== 200) {
				return data.then((errorMessage) => {
					const error = getErrorMessage(errorMessage);
					setErrorMessage(error);
					console.log(error)
				})
			}
		})
	}

	return (
		<>
		<Form onSubmit={logar}>
		<label>
			<span>Selecione seu cargo</span>
			<select name="role" 
			value={role}
			onChange={handleRole}>

				<option hidden>Cargo</option>
				<option value="waiter">Atendente</option>
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
				type="password" 
				value={password}
				name="password"
				placeholder="Digite sua senha"
				onChange={handlePassword} 
			/>
		</label>
		{errorMessage && <ErrorDiv><p>{errorMessage}</p></ErrorDiv>}
		<Button type="submit" value="Login">Login</Button>

		</Form>
		</>
	)
}

export default Login;