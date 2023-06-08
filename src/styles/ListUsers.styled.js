import styled from "styled-components";

export const UsersContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

export const CardUsers = styled.li`
  width: 15rem;
  height: auto;
  border-radius: 15px;
  font-size: .9rem;
  background-color: #e1cf7d;
  border: 0.3rem solid #963c08;
  margin: 1rem;
  padding: .8rem;
  align-items: center;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1rem;
`;

export const BtnsUsers = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  button {
    border-radius: 10px;
    margin-top: 1rem;
    border: none;
    background-color: #963c08;
    color: #e1cf7d;
    padding: 0.5rem;
    cursor: pointer;
    font-size: .5rem;

    :hover {
      background-color: #763c09;
    }
  }
`;
