import { Link } from "react-router-dom";
import { ButtonContainer,Button } from "../../styles/Button.styled";
import Header from "../../Components/header/Header";

const Adm = () => {
  return (
  <>
    <Header />
    <ButtonContainer>
      <Link to="/register">
        Adicionar novo colaborador
      </Link>

      <Link to="/listusers">
        Lista de colaboradores
      </Link>

      <Link to="/adcproducts">
        Adicionar ítem ao cardápio
      </Link>

      <Link to="/listproducts">
        Lista de produtos
      </Link>
    </ButtonContainer>
  </>
  );
};

export default Adm;
