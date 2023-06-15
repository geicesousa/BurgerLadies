import { Link } from "react-router-dom";
import { Button } from "../styles/Button.styled";
import KitchenProgress from "../Components/KitchenProgress";
import Header from "../Components/Header";

const Attendance = () => {
  return (
    <>
    <Header/>
      <Link to="/ordered">
        <Button>Novo Pedido</Button>
      </Link>
      <KitchenProgress/>  
    </>
  );
};

export default Attendance;
