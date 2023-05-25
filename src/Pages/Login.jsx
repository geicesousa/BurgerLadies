import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { ButtonForm, Form, MainForm } from "../styles/Form.styled";
import { toast } from "react-toastify";
import { login } from '../services/localStorage'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}	

    function logIn(e) {
        e.preventDefault();
        loginUser(email, password)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                // setError(ErrorMsg(response));
                // return response.json()
                else{
                    toast.error("error!");
                }
            })
            .then((data) => {
                if (!data.code) {
                    login(data.token, data.role);
                    toast.success("Sucesso!");
                    navigate(data.role === 'attendance' ? '/attendance' : '/kitchen');
                }
                return data
            })
            .catch((error) => console.log(error))
    }

    return (
        <MainForm>
            <Form onSubmit={logIn}>
            <h2>Faça seu login</h2>
                <label>
                    <span>Digite seu email</span>
                    <input
                    type="text" 
                    value={email}
                    name="email"
                    placeholder="Digite seu Email" 
                    onChange={handleEmail} 
                    />
                </label>
                <label>
                    <span>Digite sua senha</span>
                    <input
                   type="text" 
                   value={password}
                   name="password"
                   placeholder="Digite sua senha" 
                   onChange={handlePassword} 
                    />                
                </label>              
                {/* <div>
                    <ErrorMsg type="error" message={error} changeSetError={setError} />
                </div> */}
                <ButtonForm onClick={logIn} type='button'>Login</ButtonForm>
         	
            </Form>
        </MainForm>
    )
}
export default Login;