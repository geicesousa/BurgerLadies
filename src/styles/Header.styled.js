import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  img {
    width: 250px;

    @media (min-width: 700px) {
      width: 200px;
    }
  }
`;

export const IconesMenu = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`;
