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

export const ContainerCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-left: 0;
`;

export const Cards = styled.ul`
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

export const SectionCards = styled.section`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
  justify-content: center;
  display: flex;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
`;
