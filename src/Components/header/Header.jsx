import { useNavigate } from "react-router-dom";
import { ContainerHeader, IconesMenu } from "./Header.styled";
import { Return } from "../../Pages/ordered/MyCart.styled";
import { logout } from "../../Pages/login/Login";
import burguerLogo from "../../assets/ladies.png";
import { ButtonVoltar, Buttonsair } from "../../styles/Button.styled";

function Header() {
  const navigate = useNavigate();

  function sair() {
    logout();
    navigate("/");
  }
  
  return (
    <ContainerHeader>
      <>
        <img src={burguerLogo} />
      </>
      <IconesMenu>
        <Return>
          <ButtonVoltar onClick={() => navigate(-1)}>Voltar</ButtonVoltar>
        </Return>

        <Buttonsair
          onClick={sair}
        >Sair</Buttonsair>
      </IconesMenu>
    </ContainerHeader>
  );
}

export default Header;
