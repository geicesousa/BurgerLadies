import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getApi, deleteApi } from "../../services/api";
import Header from "../../Components/header/Header";
import EditUser from "./EditUser";
import { ButtonDelete, ButtonToEdit } from "../../styles/Button.styled";
import { Cards, ContainerCards, H3, SectionCards } from "../../styles/Global.styles";

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
          toast.success("colaborador excluído com sucesso");
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
      <ContainerCards>
        {users.map((user) => (        
            <>
              <Cards key={user.id}>
                <strong>Nome: </strong>
                {user.name} <br />
                <strong>Email: </strong>
                {user.email} <br />
                <strong>Setor: </strong>
                {user.role} <br />
                <SectionCards>
                  <ButtonDelete onClick={() => deleteUsers(user)}>Excluir</ButtonDelete>
                  <ButtonToEdit onClick={()=> openModal(user)}> Editar</ButtonToEdit>
                </SectionCards>
              </Cards>            
            </>
         
        ))}
       </ContainerCards>
      
    </>
  );
};

export default ListUsers;
