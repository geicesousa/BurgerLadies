import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getApi, deleteApi } from "../../services/api";
import {
  BtnsUsers,
  CardUsers,
  H3,
  UsersContainer,
} from "./ListUsers.styled";
import Header from "../../Components/header/Header";
import EditUser from "./EditUser";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  const getUsers = async () => {
    getApi(`users/`)
    .then((data) => {
      setUsers(data);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  async function deleteUsers(user) {
    deleteApi(`users/${user.id}`)
      .then((response) => {
        if (response.ok) {
          toast.success("colaborador deletado com sucesso");
        }
      })
      .then((data) => {
        // const teste = users.filter( item => item.id !== user.id)
        setUsers((prevState) =>
          prevState.filter((item) => item.id !== user.id)
        );
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(user.id);
  };

  const handleUpdateUser = (id, updatedUser) => {
    const updatedUsers = users.map(user => {
      if(user.id === id) {
        return {...user, user: updatedUser}
      }
      return user
    })
    setUsers(updatedUsers)
    closeModal()
  }
  
  
    const openModal = (user) => {
      setEditingUser(user)
      setShowModal(true)
    }
  
    const closeModal = () => {
      setEditingProduct(null)
      setShowModal(false)
    }

  return (
    <>
      <Header />
      <H3>Lista de colaboradores</H3>
      {showModal && (
          <EditUser user={editingUser} onUpdate={handleUpdateUser}/>
        )}
      <UsersContainer>
        {users.map((user) => {
          return (
            <>
              <CardUsers key={user.id}>
                <strong>Nome: </strong>
                {user.name} <br />
                <strong>Email: </strong>
                {user.email} <br />
                <strong>Setor: </strong>
                {user.role} <br />
                <BtnsUsers>
                  <button onClick={() => deleteUsers(user)}>Deletar colaborador</button>
                  <button onClick={()=> openModal(user)}> Editar colabordor</button>
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
