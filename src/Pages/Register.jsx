import { useState } from "react";
import { createUser } from "../services/api";
import { ButtonForm, Form, MainForm } from "../styles/Form.styled";
import { toast } from "react-toastify";
import Input from "../Components/Input";
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
          <label>
            <span>Nome do colaborador</span>
            <Input
              type="text"
              value={name}
              name="name"
              placeholder="Digite o nome do colaborador"
              onChange={handleName}
            />
          </label>
          <label>
            <span>E-mail do colaborador</span>
            <Input
              type="text"
              value={email}
              name="email"
              placeholder="Digite o e-mail do colaborador"
              onChange={handleEmail}
              />
          </label>
          <label>
            <span>Digite uma senha</span>
            <Input
              type="text"
              value={password}
              name="password"
              placeholder="Digite uma senha"
              onChange={handlePassword}
            />
          </label>
          <label>
            <span>Selecione o cargo</span>
            <select value={role} placeholder="Cargo" onChange={handleRole}>
              <option hidden>Setor</option>
              <option value="atendente">Atendimento</option>
              <option value="cozinha">Cozinha</option>
              <option value="administração">Administração</option>
            </select>
          </label>
          <ButtonForm type="submit">Efetuar cadastro</ButtonForm>
        </Form>
        {cadastrado && toast.success("Cadastro realizado com sucesso!")}
      </MainForm>
    </>
  );
}

export default Register;
