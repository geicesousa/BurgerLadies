import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 380px;

    @media (min-width: 1200px) {
      width: 25%;
    }
  }
`;
