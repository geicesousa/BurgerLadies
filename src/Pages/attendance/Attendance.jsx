import { Link } from "react-router-dom";
import { Button } from "../../styles/Button.styled";
import KitchenProgress from "../../Pages/kitchen/kitchenProgress";
import Header from "../../Components/header/Header";

const Attendance = () => {
  return (
    <>
    <Header/>
      <Link to="/ordered">
        Novo Pedido
      </Link>
      <KitchenProgress/>  
    </>
  );
};

export default Attendance;
