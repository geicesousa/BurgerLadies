import { Link } from "react-router-dom";
import { ButtonContainer } from "../styles/Button.styled";
import  Button  from '../Components/Button'

const Admin = () => {
  return (
    <>
    <ButtonContainer>
    <Button type= 'submit'> <Link to='/register'>Adcionar novo colaborador</Link></Button>
    <Button type= 'submit'> <Link to='/listusers'>Lista de colaboradores</Link></Button>
    <Button>Lista de Produtos</Button>
    </ButtonContainer>
    </>
  )
}

export default Admin