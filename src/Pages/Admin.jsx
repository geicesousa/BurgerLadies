import { Link } from "react-router-dom";
import { Button, ButtonContainer } from "../styles/Home.styled";

const Admin = () => {
  return (
    <>
    <ButtonContainer>
    <Button type='submit'>
        <Link to='/register'>
        Adcionar novo colaborador
        </Link>      
      </Button>
      <Button>Lista de colaboradores</Button>
      <Button>Lista de Produtos</Button>
    </ButtonContainer>
    </>
  )
}

export default Admin