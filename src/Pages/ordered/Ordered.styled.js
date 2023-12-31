import styled from "styled-components";

export const DivMenu = styled.div`
  width: 90vw;
  height: auto;
  margin: auto;
  gap: 1rem;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #963c08;


  h4 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
  }
`;


export const SectionItens = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0.4rem; 
`;

export const DivButtons = styled.div`
  background-color: #963c08;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
  margin: auto;
  border-radius: 15px;

`;

export const Button = styled.button`
  width: 20rem;
  margin-bottom: 2rem;
  background-color: #8c0000;
  gap: 2rem;
  padding: 0.5rem;
  margin: 0.5rem;
  margin-bottom: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #DDD9CE;
  cursor: pointer;
  margin-top: 1rem;
`;
export const SpanSize = styled.span`
  color: red;
  width: 50px;
`;

export const WarningMsg = styled.p`
  height: auto;
  width: 250px;
  position: fixed;
  right: 0;
  top: 5%;
  background-color: #DDD9CE;;
  color: red;
  font-size: 1rem;
  font-family: cursive;
  padding: 5px;
  border-radius: 5px;
`;
