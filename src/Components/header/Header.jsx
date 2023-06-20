import { ArrowFatLineLeft, SignOut } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { ContainerHeader, IconesMenu } from "./Header.styled";
import { Return, SignOutDiv } from "../../Pages/ordered/MyCart.styled";
import { logout } from "../../Pages/login/Login";
import burguerLogo from "../../assets/ladies.png";

function Header() {
  
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <>
        <img src={burguerLogo} />
      </>
      <IconesMenu>

        <Return>
          <button onClick={() => navigate(-1)}>
            <ArrowFatLineLeft />
          </button>
          <span>Voltar</span>
        </Return>

        <Link
          onClick={() => {logout();
            navigate("/");
          }}
        >
          <SignOutDiv>
            <SignOut />
            <span>Sair</span>
          </SignOutDiv>
        </Link>
      </IconesMenu>
    </ContainerHeader>
  );
}

export default Header;
