import styled from "styled-components";

export const ButtonContainer = styled.main`
  margin: auto;
  padding: 5rem;
  margin-top: 1rem;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  text-align: center;
 
`;

export const Button = styled.button`
  margin: auto;
  display: flex;
  width: 50%;
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
  font-size: .8rem;

  a {
    color: #e1cf7d;
  }

  :hover {
    background-color: #763c09;
  }
`;

export const ButtonProgress = styled.button`
  margin: auto;
  width: 20%;
  height: 10%;
  display: flex;
  gap: .5rem;
  align-items: center;
  justify-content: space-around;
  padding: .5rem;
  border-radius: 10px;
  background-color: #963c08;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: .8rem;
`

export const ButtonStatus = styled.button`
  padding: 5px;
  color: #e1cf7d;
  background-color: #03300b;
  border: #03300b;
  margin: auto;
  display: flex;
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
`;