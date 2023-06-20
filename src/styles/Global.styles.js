import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
  }

  body {
    background-color: #F0B04E;
    font-family: Arial, Helvetica, sans-serif
  }

  a {
    text-decoration: none;
  }
  
  li{
    list-style:none;
  }
`;
export const Cards = styled.li`
  width: 15rem;
  height: auto;
  border-radius: 15px;
  font-size: 0.9rem;
  background-color: #e1cf7d;
  border: 0.3rem solid #963c08;
  margin: 1rem;
  padding: 0.8rem;
  align-items: center;
`;

export const ContainerCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

export const SectionCards = styled.section`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin: 1rem;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
`;
