import { Link } from "react-router-dom";
import { ButtonContainer } from "../styles/Button.styled";
import Button from "../Components/Button";
import Header from "../Components/Header";

const Attendance = () => {
  return (
    <>
      <Header />
      <ButtonContainer>
        <Link to="/ordered">
          <Button> Novo Pedido</Button>
        </Link>
        <Button>Pedidos prontos</Button>
        <Button>Pedidos entregues</Button>
        <Button>Pedidos pendentes</Button>
      </ButtonContainer>
    </>
  );
};

export default Attendance;
