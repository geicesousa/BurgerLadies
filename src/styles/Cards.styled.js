import styled from "styled-components";

export const CardsItens = styled.div`
  padding: 1rem;
  border: .1rem solid #8c0000;
  background-color: #863c08;
  border-radius: 15px;
  color: #DDD9CE;
  width: 250px;
  height: 350px;
  margin: auto; 
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardInfo = styled.section`
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }

  p {
    width: auto;
    text-align: center;
    margin-top: .5rem;
  }

  img {
    width: 185px;
    height: auto;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1.2rem;
  border: none;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
