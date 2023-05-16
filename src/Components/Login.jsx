import { Form, Button } from "../styles/Login.styled"
import { Link } from "react-router-dom";


function Login() {
  return (
	<>
	<Form>
		<select name="cargo" id="cargo">
			<option selected="true" disabled="disabled">Cargo</option>
			<option value="garcon">Garçon</option>
			<option value="chefe">Chefe de cozinha</option>
			<option value="administrador">Admnistrador</option>
		</select>
		<input placeholder="Id"  />
        <input placeholder="Senha"/>
		<Button><Link to="/home"></Link>Login</Button>		
	</Form>
	</>
  )
}
export default Login