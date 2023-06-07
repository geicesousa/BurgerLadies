import { Link } from "react-router-dom";
import { Button, ButtonContainer } from "../styles/Button.styled";
import KitchenProgress from "../Components/kitchenProgress";
import Header from "../Components/Header";

const Attendance = () => {
  return (
    <>
     <Header/>
    
      <Link to="/ordered">
          <button> Novo Pedido</button>
        </Link>
      
        <KitchenProgress/>  
      
    </>
  );
};

export default Attendance;
