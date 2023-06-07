import React, { useState } from "react";
import { pathUsers } from "../services/api";
import { toast } from "react-toastify";

const editarUsuario = () => {
  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [roleUser, setRoleUser] = useState("");
  const [users, setUsers] = useState("");
  console.log(users);

  const handleName = (e) => setNameUser(e.target.value);
  const handleEmail = (e) => setEmailUser(e.target.value);
  const handlePassword = (e) => setPasswordUser(e.target.value);
  const handleRole = (e) => setRoleUser(e.target.value);

  async function editarUsers(e, item) {
    console.log(item);
    e.preventDefault();

    const editar = {
      name,
      email,
      password,
      role,
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
  }

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form onSubmit={editarUsers}>
        <input 
          type="text" 
          name="name" 
          value={nameUser} 
          onChange={handleName} 
        />
        <input
          type="email"
          name="email"
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
      </form>
    </div>
  );
};

export default editarUsuario;
