import Header from "../../Components/header/Header";
import { ButtonContainer } from "../../styles/Button.styled";
import { AttendanceLink } from "../../styles/Links.styled";
import KitchenProgress from "../kitchen/KitchenProgress";

function Attendance() {
  return (
    <>
      <Header />
      <ButtonContainer>
        <AttendanceLink to="/ordered">Novo pedido</AttendanceLink>
        <KitchenProgress />
      </ButtonContainer>
    </>
  );
}

export default Attendance;
