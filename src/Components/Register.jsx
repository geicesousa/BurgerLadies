import { useState } from "react";
import { Button, Form, ParagrafoErro } from "../styles/Login.styled";
import Alert from 'react-bootstrap/Alert'

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");  
	const [role, setRole] = useState("");
	const [msg, setMsg] = useState('')	
	const urlRegister = "http://localhost:8080/users"

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleRole = (e) => {
		setRole(e.target.value)
	}

	const criarusuario = async (name, email, password, role) => {
		const userData = {
			name,
			email,
			password,
			role,
		}
		const response = await fetch(urlRegister, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});
		return response.json();
	} 	

	const aoCriar = async (e) => {		
		e.preventDefault()
		try {
			const loginUsuario = await criarusuario(name,email, password, role)
			console.log(loginUsuario)
			if (name === '' || email === '' || password === '' || role === '') {
				setMsg('Preencha todos os campos!')
			return false
			}
			setMsg('')
			return true

		}catch(error){
			console.error(error.message);
		}
	}

	return (
		<>
		<Form onSubmit={aoCriar}>
		<label>
			<span>Selecione seu cargo</span>
			<select name="role" 
			value={role}
			onChange={handleRole}>
				<option hidden>Cargo</option>
				<option value="waiter">Garçon/Garçonete</option>
				<option value="chef">Chefe de cozinha</option>
				<option value="admin">Admnistrador</option>
			</select>
		</label>
		<label>
			<span>Nome</span>
			<input 
				type="text" 
				value={name}
				name="name"
				placeholder="Digite seu nome" 
				onChange={handleName}  
			/>
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
        <ParagrafoErro>
          { msg !== '' && <Alert variant='warning'>
              {msg}
            </Alert>
          }
        </ParagrafoErro>		               
		<Button type="submit" value="Login">Criar usuário</Button>
		</Form>
		</>
	)
}

export default Register;