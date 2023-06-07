import { useState, useEffect } from "react";
import { listUsers, deleteUsersId } from "../services/api";
import {
  BtnsUsers,
  CardUsers,
  H3,
  UsersContainer,
} from "../styles/ListUsers.styled";
import Header from "../Components/Header";
import { toast } from "react-toastify";
import editarUsuario from "../Components/editarUsuario";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const apiUsers = async () => {
    listUsers()
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    apiUsers();
  }, []);

  async function deleteUsers(user) {
    deleteUsersId(user.id)
      .then((response) => {
        if (response.ok) {
          toast.success("deu certo");
        }
      })
      .then((data) => {
        // const teste = users.filter( item => item.id !== user.id)
        setUsers ((prevState) => prevState.filter(item => item.id !== user.id));      
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(user);
  }

  return (
    <>
      <Header />
      <H3>Lista de colaboradores</H3>
      <UsersContainer>
        {users.map((user) => {
          return (
            <>
              <CardUsers   key={user.id} >
             Nome:{user.name} Email:{user.email} Setor:{user.role} <br />
                <BtnsUsers>
                  <button onClick={() => deleteUsers(user)}>
                    Deletar colaborador
                  </button>
                  <button onClick={()=> editarUsuario()} >Editar colaborador</button>
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
