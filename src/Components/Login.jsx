import { useState } from "react";
import { Form, Button } from "../styles/Login.styled";
import { Link } from "react-router-dom";


function Login() {

	const [ role, setRole] = useState('cargo')

  return (
		<Form>
			<select name='cargo' id='cargo' value={role}>
				<option value='cargo'>Cargo</option>
				<option value='garcon'>Garçon</option>
				<option value='chefe'>Chefe de cozinha</option>
				<option value='adm'>Administrador</option>
			</select>
			<input placeholder='Id'  />
					<input placeholder='Senha'/>
			<Button><Link to='/home'></Link>Login</Button>		
		</Form>
  )
}
export default Login