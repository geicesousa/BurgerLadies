import { ButtonGlobal } from "../styles/Button.styled";

const Button = (props) => {
  return <ButtonGlobal type="submit">{props.children}</ButtonGlobal>;
};
export default Button;
