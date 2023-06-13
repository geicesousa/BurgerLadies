import React, { useState } from "react";
import { pathUsers } from "../services/api";
import { toast } from "react-toastify";
import Formulary from "./Formulary";
import Select from "./Select";
import { MainForm, Form } from "../styles/Form.styled";
import { ButtonForm } from "../styles/Button.styled";


const EditUser = (props) => {
  const [nameUser, setNameUser] = useState(props.name);
  const [emailUser, setEmailUser] = useState(props.email);
  const [passwordUser, setPasswordUser] = useState(props.password);
  const [roleUser, setRoleUser] = useState(props.roleUser);
  const [users, setUsers] = useState(props.users);
  console.log(users);

  const handleName = (e) => setNameUser(e.target.value);
  const handleEmail = (e) => setEmailUser(e.target.value);
  const handlePassword = (e) => setPasswordUser(e.target.value);
  const handleRole = (e) => setRoleUser(e.target.value);

  async function editUsers(e, item) {
    console.log(item);
    e.preventDefault();

    const editar = {
      name: nameUser,
      email: emailUser,
      password: passwordUser,
      role: roleUser,
    };
    pathUsers(item.id, editar)
      .then((response) => {
        if (response.ok) {
          toast.success("deu certo");
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(item);
  }

  return (
    <MainForm>
    <h2>Editar Usuario</h2>
      <Form onSubmit={editUser}>
        <Formulary
          text="Nome"
          type="text" 
          value={nameUser} 
          onChange={handleName} 
        ></Formulary>
        <Formulary
          text="E-mail"   
          type="email"
          value={emailUser}
          onChange={handleEmail}     
        ></Formulary>
        <Formulary
          text="Senha"
          type="password"
          value={passwordUser}
          onChange={handlePassword}          
        >
          {props.name}

        </Formulary>
        <Select
          text="Setor"
          value={roleUser} 
          value1="Atendimento"
          value2="Cozinha"
          value3="Administração"
          placeholder="Cargo" onChange={handleRole}
        ></Select>
        <ButtonForm type="submit">Salvar</ButtonForm>
      </Form> 


      {/* <form onSubmit={editUser}>
        <input 
          text={user}
          type="text" 
          name="name" 
          value={nameUser} 
          onChange={handleName} 
        >user</input>
        <input
          type="email"
          value={emailUser}
          onChange={handleEmail}
        />
        <input
          type="password"
          name="password"
          value={passwordUser}
          onChange={handlePassword}
        />
        <select value={roleUser} placeholder="Cargo" onChange={handleRole}>
          <option hidden>Setor</option>
          <option value="atendente">Atendimento</option>
          <option value="cozinha">Cozinha</option>
          <option value="administração">Administração</option>
        </select>
        <button type="submit">Salvar</button> 
      </form>*/}
    </MainForm>
  );
};

export default EditUser;
