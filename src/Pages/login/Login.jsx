import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../services/api";
import { Form, MainForm } from "../../Components/formulary/Form.styled";
import { ButtonForm } from "../../styles/Button.styled";
import HeaderLogin from "../../Components/header/HeaderLogin";
import Formulary from "../../Components/formulary/Formulary"

export const logout = () => {
  localStorage.removeItem('accessToken');
  setIsLoggedin(false);
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false); 

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  function logIn(e) {
    e.preventDefault();
    loginUser(email, password)
      .then((response) => {
        if (response.status <= 299) {
          return response.json();
        } else {
          toast.error("error!");
        }
      })
      .then((data) => {
        if (!data) return 
          console.log(localStorage);
          localStorage.setItem("role", data.role);
          localStorage.setItem("accessToken", data.accessToken);
          toast.success("Login efetuado!");
          setIsLoggedin(true);
          setEmail('');
          setPassword('');
          if (data.user.role === "atendente") {
            navigate("/attendance");
          } else if (data.user.role === "cozinha") {
            navigate("/kitchen");
          } else if (data.user.role === "administração"){
            navigate("/adm");
          }
      })
      .catch(() =>
        toast.error("Usuário não encontrado, verifique os dados e tente novamente!")
      );
  }  

    return (
    <>
      <HeaderLogin />
      <MainForm>        
        <Form onSubmit={logIn}>
          <h2>Faça seu login</h2>
          <Formulary
            text="Email"
            type="email"
            value={email}
            name="email"
            placeholder="Digite seu email"
            onChange={handleEmail}
          ></Formulary>     
          
          <Formulary
            text="Senha"
            type="password"
            value={password}
            name="password"
            placeholder="Digite sua senha"
            onChange={handlePassword}
          ></Formulary>     
          <ButtonForm onClick={logIn} type="button">
            Login
          </ButtonForm>
        </Form> 
      </MainForm>
    </>
  );
}
export default Login;
