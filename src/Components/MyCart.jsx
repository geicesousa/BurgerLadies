import { Link } from "react-router-dom";
import { SizeCart } from "../styles/MyCart.styled";
import { TiShoppingCart } from "react-icons/ti";
import { BiArrowBack } from "react-icons/bi";
import { ContainerCart } from "../styles/MyCart.styled";

const MyCart = ({ size, setShow }) => {
  return (
    <ContainerCart>
      <BiArrowBack
        size={"30px"}
        color={"black"}
        onClick={() => setShow(true)}
      />
      <span onClick={() => setShow(true)}></span>
      <Link onClick={() => setShow(false)}>
        <TiShoppingCart color="black" size={35} />
        <SizeCart>{size}</SizeCart>
      </Link>
    </ContainerCart>
  );
};

export default MyCart;
