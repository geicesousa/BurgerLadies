import burguerLogo from "../assets/ladies.png";
import { ContainerHeaderLogin } from "../styles/HeaderLogin.styles";

const HeaderLogin = () => {
  return (
    <ContainerHeaderLogin>
      <div>
        <img src={burguerLogo} />
      </div>
    </ContainerHeaderLogin>
  );
};

export default HeaderLogin;
