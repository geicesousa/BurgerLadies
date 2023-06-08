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
        <Link to="/adicionarprodutos">
          <Button>Adicionar ítem ao cardápio</Button>
        </Link>
        <Link to="/listproducts">
          <Button>Lista de produtos</Button>
        </Link>
      </ButtonContainer>
    </>
  );
};

export default Adm;
