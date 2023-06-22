import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonContainer = styled.main`
  margin: auto;
  padding: 5rem;
  width: 90vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 2rem;
  align-items:center; 
`;

export const AttendanceLink = styled(Link)`
  margin: auto;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  background-color: #963c08;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: .7rem;
  color: white;


  :hover {
    background-color: #763c09;
  }
`;


export const AdmLink = styled(Link)`
	margin: auto;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  background-color: #963c08;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: .7rem;

`
export const ProgressButton = styled.button`
  margin: auto;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  background-color: #963c08;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: .7rem;
  color: white;
`

export const ButtonStatus = styled.button`
  padding: 5px;
  color: #e1cf7d;
  background-color: #03300b;
  border: #03300b;
  margin: auto;
  display: flex;
  border-radius: 5px;
`
export const ButtonForm = styled.button`
  width: 50%;
  margin: auto;
  border: none;
  font-size: 1rem;
  background-color: #03300b;
  color: #e1cf7d;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #3a6332;
  }
`

export const ButtonDelete = styled.button `
background-color: #8c0000;
width: 5rem;
height: 2rem;
color: #e1cf7d;
border-radius: 5px;
border: none;

`

export const ButtonToEdit = styled.button `
background-color: #03300b;
width: 5rem;
height: 2rem;
color: #e1cf7d;
border-radius: 5px;
border: none;

`

export const ButtonUpdate = styled.button `
background-color: #03300b;
width: 5rem;
height: 2rem;
color: #e1cf7d;
margin: .2rem;
border-radius: 5px;
border: none;
`

export const ButtonVoltar = styled.button `
width: 5rem;
height: 2rem;
background-color: #03300b;
color: white;
border-radius: 5px;
border: none;

`

export const Buttonsair = styled.button `
background-color: #03300b;
width: 5rem;
height: 2rem;
color: white;
border-radius: 5px;
border: none;

`
