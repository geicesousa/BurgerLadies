import { useState } from "react";
import { createUser } from "../services/api";
import { ButtonForm, Form, MainForm } from "../styles/Form.styled";
import { toast } from "react-toastify";

function Register() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [sector, setSector] = useState(" ");
    const [cadastrado, setCadastrado ] = useState(false)

    const handleName = (e) => setName(e.target.value)
	const handleEmail = (e) => setEmail(e.target.value)
	const handlePassword = (e) => setPassword(e.target.value)
	const handleRole = (e) => setSector(e.target.value)
    
    function registerUser(e) {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(email)) {       
            return toast.error('email no formato errado')
        }
        if (password.length < 6) {
            return toast.error('senha muito curta, favor escolher uma senha com 6 ou mais digitos')            
        }
               
        createUser(name, email, password, sector)
        .then((response) => {
            if (response.status <= 299 ) { 
                setCadastrado(true); 
                return response.json(); 
                                                            
        }}).catch(() => toast.error("Algo deu errado, confira os dados e tente novamente!"))  
        
          
    }

    
    
    return (
        <MainForm>          
             <Form onSubmit={registerUser}>
             <h2>Cadastro de colaboradores</h2>
             <label>
                    <span>Nome do colaborador</span>
                    <input
                       type="text" 
                       value={name}
                       name="name"
                       placeholder="Digite o nome do colaborador" 
                       onChange={handleName} 
                    />
               </label>
               <label>
                    <span>E-mail do colaborador</span>
                    <input
                       type="text" 
                       value={email}
                       name="email"
                       placeholder="Digite o e-mail do colaborador" 
                       onChange={handleEmail} 
                    />
               </label>
                <label>
                    <span>Digite uma senha</span>                 
                    <input
                		type="text" 
                        value={password}
                        name="password"
                        placeholder="Digite uma senha" 
                        onChange={handlePassword} 
                    />                
                </label>                   
                <label>
                    <span>Selecione o cargo</span>
                    <select value={sector} placeholder='Cargo' onChange={handleRole}>
                        <option hidden>Setor</option>
                        <option value='atendente'>Atendimento</option>
                        <option value='cozinha'>Cozinha</option>
                        <option value='administração'>Administração</option>
                    </select>
                </label>                
                {/* <div>
                    <ErrorMsg type="error" message={error} changeSetError={setError} />
                </div> */}
                <ButtonForm>Efetuar cadastro</ButtonForm>
        </Form>
        {cadastrado && (
        toast.success('Cadastro realizado com sucesso!')        
      )}
        </MainForm>
    );
};

export default Register;