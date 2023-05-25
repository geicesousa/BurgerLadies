import { useState } from "react";
import { createUser } from "../services/api";
import { ButtonForm, Form, MainForm } from "../styles/Form.styled";
import { toast } from "react-toastify";


function Register() {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [role, setRole] = useState(" ");
   

	
	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleRole = (e) => {
		setRole(e.target.value)
	}

    function registerUser(e) {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(email)) {       
            return toast.error('email no formato errado')
        }
        if (password.length < 6) {
            return toast.error('senha muito curta, favor escolher uma senha com 6 ou mais digitos')
            
        }
        createUser(email, password, role)
            .then((response) => {
                if (response.status <=299 ) {  
                    toast.success("Cadastro realizado com seucesso!");                                     
                    return response.json();
                }
            })
            .catch(() => toast.error("Algo deu errado, confira os dados e tente novamente!"))

            console.log(createUser)
    }

    
    
    return (
        <MainForm>          
             <Form onSubmit={createUser}>
             <h2>Cadastro de colaboradores</h2>
                    {/* <label>
                        <span>Digite seu nome</span>
                        <input
                            type="text" 
                            value={name}
                            name="name"
                            placeholder="Digite seu nome" 
                            onChange={handleName} 
                        />
                    </label> */}
                <label>
                    <span>Digite o e-mail do colaborador</span>
                    <input
                       type="text" 
                       value={email}
                       name="email"
                       placeholder="Digite seu Email" 
                       onChange={handleEmail} 
                    />
               </label>
                <label>
                    <span>Digite uma senha</span>                 
                    <input
                		type="text" 
                        value={password}
                        name="password"
                        placeholder="Digite sua senha" 
                        onChange={handlePassword} 
                    />                
                </label>                   
                <label>
                    <span>Selecione o cargo</span>
                    <select value={role} placeholder='Cargo' onChange={handleRole}>
                        <option hidden>Cargo</option>
                        <option value='attendant'>Atendimento</option>
                        <option value='kitchen'>Cozinha</option>
                        <option value='admin'>Administração</option>
                    </select>
                </label>                
                {/* <div>
                    <ErrorMsg type="error" message={error} changeSetError={setError} />
                </div> */}
                <ButtonForm type="submit" onClick={registerUser}>Efetuar cadastro</ButtonForm>
        </Form>
        </MainForm>
    );
};

export default Register;