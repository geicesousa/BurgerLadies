import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  gap: 4rem;
  margin-bottom: 2rem; 

  @media (min-width: 300px) and (max-width: 772px) {
    justify-content: center;
  }

  img {
    width: 250px;
  }
`;

export const IconesMenu = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
