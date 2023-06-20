import KitchenProgress from "../../Pages/kitchen/kitchenProgress";
import Header from "../../Components/header/Header";
import { AttendanceLink, ButtonContainer } from "../../styles/Button.styled";

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
