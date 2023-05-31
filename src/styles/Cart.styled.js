import styled from "styled-components";

export const Article = styled.article`
  width: 90vw;
  margin: auto;
  margin-top: 7rem;
`;
export const CartBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-bottom: 2px solid skyblue;
  padding-bottom: 5px;
`;

export const CartImg = styled.div`
  display: flex;
  width: 400px;
  gap: 1.5rem;
  align-items: center;

  p {
    color: black;
    font-weight: bold;
    margin-left: 10px;
  }

  img {
    width: 70px;
    height: auto;
    border-radius: 15px;
  }
`;
export const DivTest = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  button {
    padding: 0.3rem;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background-color: #8c0000;
    color: white;
  }
  span {
    padding: 0.3rem;
  }
`;
export const DivButton = styled.div`
  background-color: white;
  border-radius: 15px;

  button {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 6rem;
  gap: 1rem;

  && :nth-child(1) {
    display: flex;
    font-size: 0.8rem;
    align-items: center;
  }
`;

export const FinalizeOrder = styled.div`
  background-color: #8c0000;
  width: 10rem;
  height: auto;
  color: white;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
  padding: 0.5rem;
`;

export const ContainerFooterOrder = styled.section`
  display: flex;
  justify-content: space-between;
`;
