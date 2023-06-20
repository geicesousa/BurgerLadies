import { AdmLink, ButtonContainer } from "../../styles/Button.styled";
import Header from "../../Components/header/Header";

const Adm = () => {
  return (
    <>
      <Header />
      <ButtonContainer>
        <AdmLink to="/register">Adicionar colaborador</AdmLink>
        <AdmLink to="/listusers">Lista de colaboradores</AdmLink>
        <AdmLink to="/adcproducts">Adicionar ítem ao cardápio</AdmLink>
        <AdmLink to="/listproducts">Lista de ítens do cardápio</AdmLink>
      </ButtonContainer>
    </>
  );
};

export default Adm;
