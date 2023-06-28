import { ButtonContainer } from "../../styles/Button.styled";
import { AdmLink } from "../../styles/Links.styled";
import Header from "../../Components/header/Header";

const Adm = () => {
  return (
    <>
      <Header />
      <ButtonContainer>
        <AdmLink to="/register">Adicionar colaborador</AdmLink>
        <AdmLink to="/listusers">Lista de colaboradores</AdmLink>
        <AdmLink to="/adcproducts">Adicionar item ao cardápio</AdmLink>
        <AdmLink to="/listproducts">Lista de produtos</AdmLink>
      </ButtonContainer>
    </>
  );
};

export default Adm;
