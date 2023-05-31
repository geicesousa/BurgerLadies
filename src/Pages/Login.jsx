import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { ButtonForm, Form, MainForm } from "../styles/Form.styled";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        if (!data.code) {
          console.log(localStorage);
          localStorage.setItem("sector", data.sector);
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          toast.success("Login efetuado!");
          if (data.user.sector === "atendente") {
            navigate("/attendance");
          } else if (data.user.sector === "cozinha") {
            navigate("/kitchen");
          } else {
            navigate("/admin");
          }
        }
      })
      .catch(() =>
        toast.error("Algo deu errado, confira os dados e tente novamente!")
      );
  }

  return (
    <MainForm>
      <Form onSubmit={logIn}>
        <h2>Faça seu login</h2>
        <label>
          <span>Digite seu email</span>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Digite seu Email"
            onChange={handleEmail}
          />
        </label>
        <label>
          <span>Digite sua senha</span>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Digite sua senha"
            onChange={handlePassword}
          />
        </label>
        <ButtonForm onClick={logIn} type="button">
          Login
        </ButtonForm>
      </Form>
    </MainForm>
  );
}
export default Login;
