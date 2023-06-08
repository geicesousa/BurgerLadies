import burguerLogo from "../assets/ladies.png";
import { ContainerHeaderLogin } from "../styles/HeaderLogin.styled";

const HeaderLogin = () => {
  return (
    <ContainerHeaderLogin>
      <img src={burguerLogo} />
    </ContainerHeaderLogin>
  );
};

export default HeaderLogin;
