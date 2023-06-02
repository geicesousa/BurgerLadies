import burguerLogo from "../assets/ladies.png";
import { ContainerHeaderLogin } from "../styles/HeaderLogin.styles";

const HeaderLogin = () => {
  return (
    <ContainerHeaderLogin>

        <img src={burguerLogo} />

    </ContainerHeaderLogin>
  );
};

export default HeaderLogin;
