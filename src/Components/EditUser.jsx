import React, { useState } from "react";
import { pathUsers } from "../services/api";
import { toast } from "react-toastify";
import Formulary from "./Formulary";
import Select from "./Select";
import { MainForm, Form } from "../styles/Form.styled";
import { ButtonForm } from "../styles/Button.styled";

const EditUser = ({ user }) => {
  const [edit, setEdit] = useState([]);
  const [id, setId] = useState(user.id);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  async function handleUpdate(user) {
    pathUsers({ id: id, name: name, email: email, role: role })
      .then((data) => {
        toast.success("deu certo");
        setEdit(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(user);
  }

  return (
    <MainForm>
      <h2>Editar Usuario</h2>
      <td>
          <input
            text="Nome"
            type="text"
            value={name}
            name="name"
            onChange={handleName}
          />
        </td>
        <td>
          <input
            text="Nome"
            type="text"
            value={email}
            name="name"
            onChange={handleEmail}
          />
        </td>
        <td>
          <Select
            text="Tipo"
            name={role}
            value={role}
            placeholder="Selecione o tipo"
            value1="Atendente"
            value2="Cozinha"
            value3="Administração"
            onChange={handleRole}
          />
        </td>
      <button onClick={() => handleUpdate({ id: user["id"] })}>
        ok
      </button>

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
