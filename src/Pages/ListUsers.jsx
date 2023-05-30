import { useState, useEffect } from "react";
import { deleteUsersId, listOfUsers } from "../services/api";
import { BtnsUsers, CardUsers, H3, UsersContainer } from "../styles/ListUers.styled";

const ListUsers = () => {
    const [users, setUsers] = useState([]);
   
  


  // renderiza os colaboradores dinamicamente
  const apiUsers = async () => {
    try {
      const response = await listOfUsers();		  
      if (response.ok) {
        const data = await response.json();
        setUsers(data)	
        
      }
    } catch (error) {
      console.error(error);
    }
};
async function deleteUsers(){
  deleteUsersId()
  .then(response => {
    return response.json( )
})
.then(data => {
  const token = localStorage.setItem('accessToken', data.accessToken)
  if(!token){
    throw new Error ('erroooo')
  }
});
}

useEffect(() => {
  apiUsers()
 }, []);


  return( 
  	<>  
    <H3>Lista de colaboradores</H3>
    <UsersContainer>
      {users.map((user)=>{         
           return ( 			  
            <>    
              <CardUsers key={user.id}> Nome:{user.name} Email:{user.email} Setor:{user.sector}
              <BtnsUsers>
              <button onClick={()=>deleteUsers(user.id)}>Deletar colaborador</button>
              <button>Editar colaborador</button> 
              </BtnsUsers>
              </CardUsers>             
            </>                   
          ) 
		   })}
      </UsersContainer>   
  </>
  )
}

export default ListUsers