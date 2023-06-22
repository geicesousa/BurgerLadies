import { ArrowFatLineLeft, SignOut } from "phosphor-react";
import { BsCartPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Return, SizeCart } from "./MyCart.styled";
import { ContainerCart } from "./MyCart.styled";
import burguerLogo from "../../assets/ladies.png";
import { logout } from "../../Pages/login/Login";
import { ButtonVoltar, Buttonsair } from "../../styles/Button.styled";
import Header from "../../Components/header/Header";

const MyCart = ({ size, setShow }) => {
  // const navigate = useNavigate();

// header do orderedProgress
  return (
    <>
      <ContainerCart>
        <Header />
      
        <Return>
          <ButtonVoltar onClick={() => setShow(true)}>
            Menu
          </ButtonVoltar>
        </Return>
  
        <Link onClick={() => setShow(false)}>
          <BsCartPlus size={40} weight="bold" color="black" />
          <SizeCart>{size}</SizeCart>
        </Link>
      </ContainerCart>
    </>
  );
};

export default MyCart;
