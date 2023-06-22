import Header from "../../Components/header/Header";
import { AttendanceLink, ButtonContainer } from "../../styles/Button.styled";
import KitchenProgress from "../kitchen/kitchenProgress";

const Attendance = () => {
  return (
    <>
      <Header />
      <ButtonContainer>
        <AttendanceLink to="/ordered">Novo pedido</AttendanceLink>
        <KitchenProgress />
      </ButtonContainer>
    </>
  );
};

export default Attendance;
