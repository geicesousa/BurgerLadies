import { useState } from "react";
import { toast } from "react-toastify";
import { createUser } from "../../services/api";
import { Form, MainForm } from "../../Components/formulary/Form.styled";
import { ButtonForm } from "../../styles/Button.styled";
import Formulary from "../../Components/formulary/Formulary";
import Select from "../../Components/select/Select";
import Header from "../../Components/header/Header";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  function registerUser(e) {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("E-mail no formato errado");
    }
    if (name === "") {
      return toast.error("Por favor digite o nome");
    }
    if (password.length < 6) {
      return toast.error(
        "Senha muito curta, por favor favor escolha uma senha com 6 ou mais digitos"
      );
    }

    createUser(name, email, password, role)
    .then((response) => {
      if (response.status === 400) {
        return toast.error("Este e-mail já possui cadastro");
      } else if (response.ok) {
        toast.success("Cadastro realizado com sucesso!");
        setName ("");
        setEmail("");
        setPassword("");
        setRole("");
      }
    })
    .catch(() =>
      toast.error("Algo deu errado, confira os dados e tente novamente!")
    );
  }

  return (
    <>
      <Header />
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
            value4=" "
            placeholder="Selecione o cargo"
            onChange={handleRole}
          ></Select>

          <ButtonForm type="submit">Efetuar cadastro</ButtonForm>
        </Form>
      </MainForm>
    </>
  );
}

export default Register;
