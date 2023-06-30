import styled from "styled-components";

export const ContainerCart = styled.header `
  width: 80vw;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 2rem;

  @media (min-width: 300px) and (max-width: 772px) {
    justify-content: center;
  }

 `
export const SizeCart = styled.span`
  background-color: #8c0000;
  position: absolute;
  color: #ddd9ce;
  border-radius: 50%;
  padding: 0.3rem;
`;

export const Return = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const SignOutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
