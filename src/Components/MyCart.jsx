import { Link, useNavigate } from "react-router-dom";
import { Return, SizeCart } from "../styles/MyCart.styled";
import { BsCartPlus } from "react-icons/bs";
// import { BiArrowBack } from "react-icons/bi";
import { ContainerCart } from "../styles/MyCart.styled";
import burguerLogo from "../assets/ladies.png";
import { ArrowFatLineLeft, SignOut } from "phosphor-react";
import { logout } from "../Pages/Login";


const MyCart = ({ size, setShow }) => {
  
  const navigate = useNavigate()
	function sair(){
		logout()
		navigate("/")
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
          <SignOut/>
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
