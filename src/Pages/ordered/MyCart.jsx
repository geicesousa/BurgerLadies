import { ArrowFatLineLeft, SignOut } from "phosphor-react";
import { BsCartPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Return, SizeCart } from "./MyCart.styled";
import { ContainerCart } from "./MyCart.styled";
import burguerLogo from "../../assets/ladies.png";
import { logout } from "../../Pages/login/Login";

const MyCart = ({ size, setShow }) => {
  const navigate = useNavigate();
  function sair() {
    logout();
    navigate("/");
  }

  return (
    <>
      <ContainerCart>
        <img src={burguerLogo} width={"270px"} />
        <Return>
          <ArrowFatLineLeft
            size={32}
            weight="bold"
            color={"black"}
            onClick={() => setShow(true)}
          />
          <span>Voltar para Menu</span>
        </Return>
        <Link onClick={() => sair()}>
          <SignOut />
          <span>Sair</span>
        </Link>

        <Link onClick={() => setShow(false)}>
          <BsCartPlus size={40} weight="bold" color="black" />
          <SizeCart>{size}</SizeCart>
        </Link>
      </ContainerCart>
    </>
  );
};

export default MyCart;
