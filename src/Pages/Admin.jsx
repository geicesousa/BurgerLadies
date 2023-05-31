import { Link } from "react-router-dom";
import { ButtonContainer } from "../styles/Button.styled";
import Button from "../Components/Button";

const Admin = () => {
  return (
    <>
      <ButtonContainer>
        <Link to="/register">
          <Button>Adcionar novo colaborador</Button>
        </Link>
        <Link to="/listusers">
          <Button> Lista de colaboradores</Button>
        </Link>
        <Button>Lista de Produtos</Button>
      </ButtonContainer>
    </>
  );
};

export default Admin;
