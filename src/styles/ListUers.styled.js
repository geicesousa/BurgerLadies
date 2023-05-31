import styled from "styled-components";

export const UsersContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

export const CardUsers = styled.li`
  width: 20rem;
  height: auto;
  border-radius: 15px;
  font-size: 1.2rem;
  background-color: #e1cf7d;
  border: 0.5rem solid #963c08;
  margin: 1rem;
  padding: 2rem;
  align-items: center;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
`;

export const BtnsUsers = styled.div`
  display: inline-flex;
  gap: 0.5rem;

  button {
    border-radius: 10px;
    margin-top: 2rem;
    border: none;
    background-color: #963c08;
    color: #e1cf7d;
    padding: 0.1rem;
    cursor: pointer;

    :hover {
      background-color: #763c09;
    }
  }
`;
