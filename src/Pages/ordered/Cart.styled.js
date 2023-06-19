import styled from "styled-components";

export const Main = styled.article`
  width: 90vw;
  margin: auto;
  margin-top: 3rem;
  background-color: #863c08;
  color: #DDD9CE;
  padding: 2rem;
  border-radius: 10px;
  
`;
export const CartBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid skyblue;
  padding: .5rem;
`;

export const CartImg = styled.div`
  display: flex;
  width: 400px;
  gap: 1.5rem;
  align-items: center;

  p {
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
    color: #DDD9CE;
    cursor: pointer;
  }
  span {
    padding: 0.3rem;
  }
`;
export const DivButton = styled.div`
  background-color: #DDD9CE;
  text-align: center;
  border-radius: 15px;
  
  button {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
  span{
    color: #000;
    font-weight: bold;
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

export const FinalizeOrder = styled.button`
  background-color: #8c0000;
  width: 10rem;
  height: auto;
  color: #DDD9CE;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
`;

export const ContainerFooterOrder = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const FormClient = styled.form`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 80vw;
  margin:  2rem auto;
  gap: 1rem;


  input {
    width: 17rem;
    border-radius: 10px;
    padding: 0.5rem;
    background-color: #e1cf7d;
    margin-right: 1rem;
    border: none;
  }

  select {
    width: auto;
    border-radius: 10px;
    padding: 0.5rem;
    background-color: #e1cf7d;
    margin-right: 1rem;
    border: none;
  }

  span {
    font-weight: bold;
  }
`;
