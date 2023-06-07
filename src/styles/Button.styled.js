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
  width: 20%;
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
