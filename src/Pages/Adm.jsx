import { Link } from "react-router-dom";
import { ButtonContainer,Button } from "../styles/Button.styled";
import Header from "../Components/Header";

const Adm = () => {
  return (
    <>
     <Header />
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

export default Adm;
