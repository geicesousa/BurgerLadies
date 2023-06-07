import { useState, useEffect } from "react";
import { deleteUsersId, listOfUsers } from "../services/api";
import {
  BtnsUsers,
  CardUsers,
  H3,
  UsersContainer,
} from "../styles/ListUsers.styled";
import Header from "../Components/Header";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const apiUsers = async () => {
    listOfUsers()
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteUsers = async () => {
    deleteUsersId()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const token = localStorage.setItem("accessToken", data.accessToken);
        if (!token) {
          throw new Error("erroooo");
        }
        setUsers((prevState)=>prevState.filter((user)=> user.id !== data.id))
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    apiUsers();
  }, []);

  return (
    <>
      <Header />
      <H3>Lista de colaboradores</H3>
      <UsersContainer>
        {users.map((user) => {
          return (
            <>
              <CardUsers key={user.id}>
                Nome:{user.name} Email:{user.email} Setor:{user.role}
                <BtnsUsers>
                  <button onClick={() => deleteUsers(user.id)}>
                    Deletar colaborador
                  </button>
                  <button>Editar colaborador</button>
                </BtnsUsers>
              </CardUsers>
            </>
          );
        })}
      </UsersContainer>
    </>
  );
};

export default ListUsers;
