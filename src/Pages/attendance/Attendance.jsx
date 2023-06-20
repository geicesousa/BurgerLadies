import KitchenProgress from "../../Pages/kitchen/kitchenProgress";
import Header from "../../Components/header/Header";
import { AttendanceLink } from "../../styles/Button.styled";


const Attendance = () => {
  return (
    <>
      <Header />
      <AttendanceLink to="/ordered">Novo pedido</AttendanceLink>
      <KitchenProgress />
    </>
  );
};

export default Attendance;
