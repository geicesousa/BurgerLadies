import { Link } from "react-router-dom";
import { Retunr, SizeCart } from "../styles/MyCart.styled";
import { BsCartPlus } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { ContainerCart } from "../styles/MyCart.styled";
import burguerLogo from "../assets/ladies.png";

const MyCart = ({ size, setShow }) => {
  return (
    <>
      <ContainerCart>
        <img src={burguerLogo} width={"270px"} />
        {/* <span onClick={() => setShow(true)}></span> */}
        <Link onClick={() => setShow(false)}>
          <BsCartPlus size={40} weight="bold" color="black" />
          <SizeCart>{size}</SizeCart>
        </Link>
      </ContainerCart>
      <Retunr>
        <BiArrowBack
          size={"30px"}
          color={"black"}
          onClick={() => setShow(true)}
        />
      </Retunr>
    </>
  );
};

export default MyCart;
