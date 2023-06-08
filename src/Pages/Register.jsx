import { useState } from "react";
import { createUser } from "../services/api";
import { Form, MainForm } from "../styles/Form.styled";
import { ButtonForm } from "../styles/Button.styled"
import { toast } from "react-toastify";
import Formulary from "../Components/Formulary";
import Select from "../Components/Select";
import Header from "../Components/Header";

function Register() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [role, setRole] = useState(" ");
  const [cadastrado, setCadastrado] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  function registerUser(e) {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("email no formato errado");
    }
    if (password.length < 6) {
      return toast.error(
        "senha muito curta, favor escolher uma senha com 6 ou mais digitos"
      );
    }

    createUser(name, email, password, role)
      .then((response) => {
        if (response.status <= 299) {
          setCadastrado(true);
          return response.json();
        }
      })
      .catch(() =>
        toast.error("Algo deu errado, confira os dados e tente novamente!")
      );
  }
  
  return (
  <>
    <Header/>
    <MainForm>
      <Form onSubmit={registerUser}>
        <h2>Cadastro de colaboradores</h2>
        <Formulary
          text="Nome do colaborador"
          type="text"
          value={name}
          name="name"
          placeholder="Digite o nome do colaborador"
          onChange={handleName}
        ></Formulary>

        <Formulary
          text="E-mail do colaborador"
          type="text"
          value={email}
          name="email"
          placeholder="Digite o e-mail do colaborador"
          onChange={handleEmail}
        ></Formulary>

        <Formulary
          text="Senha"
          type="text"
          value={password}
          name="password"
          placeholder="Digite uma senha"
          onChange={handlePassword}
        ></Formulary>

        <Select
          text="Selecione o cargo"
          value={role} 
          value1="Atendente"
          value2="Cozinha"
          value3="Administração"
          placeholder="Cargo" 
          onChange={handleRole}
        ></Select>
        
        <ButtonForm type="submit">Efetuar cadastro</ButtonForm>
      </Form>
      {cadastrado && toast.success("Cadastro realizado com sucesso!")}
    </MainForm>
  </>
  );
}

export default Register;