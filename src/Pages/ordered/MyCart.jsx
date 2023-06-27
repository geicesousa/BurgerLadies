import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Return, SizeCart } from "./MyCart.styled";
import { ContainerCart } from "./MyCart.styled";
import { ButtonVoltar } from "../../styles/Button.styled";
import Header from "../../Components/header/Header";

const MyCart = ({ size, setShow }) => {
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
