import {useRef, useState } from "react";
import { pathUsers } from "../../services/api";
import { toast } from "react-toastify";
import Select from "../../Components/select/Select";
import { ContainerEdit, Input, MainEdit, SectionButton } from "../products/Products.styled";
import { ButtonUpdate } from "../../styles/Button.styled";
import { useEffect } from "react";


const EditUser = ({ user }) => {
  const [edit, setEdit] = useState([]);
  const [id, setId] = useState(user.id);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const inputRef = useRef(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  useEffect(()=>{
    inputRef.current.focus();
  }, [])

  async function handleUpdate() {
    pathUsers({ id: id, name: name, email: email, role: role })
      .then((data) => {       
        setEdit(data);
        toast.success("Dados atualizados.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MainEdit>
      <ContainerEdit>  
            <Input
              text="Nome"
              type="text"
              value={name}
              name="name"
              onChange={handleName}
              ref={inputRef}
            />
        
            <Input
              text="Nome"
              type="text"
              value={email}
              name="name"
              onChange={handleEmail}
            />
        
            <Select
              name={role}
              value={role}
              placeholder="Selecione o tipo"
              value1="Atendente"
              value2="Cozinha"
              value3="Administração"
              onChange={handleRole}
            />
      </ContainerEdit>
      <SectionButton>
        <ButtonUpdate onClick={() => handleUpdate({ id: user["id"] })}>
          Salvar
        </ButtonUpdate>
      </SectionButton>
    </MainEdit>
  );
};

export default EditUser;
