import burguerLogo from "../../assets/ladies.png";
import { ContainerHeaderLogin } from "./HeaderLogin.styled";

const HeaderLogin = () => {
  return (
    <ContainerHeaderLogin>
      <img src={burguerLogo} />
    </ContainerHeaderLogin>
  );
};

export default HeaderLogin;
