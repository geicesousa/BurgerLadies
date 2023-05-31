import styled from "styled-components";

export const MainForm = styled.main`
  width: 100vw;
`;
export const Form = styled.form`
  background-color: #963c08;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: auto;
  margin: auto;
  margin-top: 2rem;
  gap: 1.5rem;
  border-radius: 20px;
  padding: 3rem;

  @media (min-width: 1200px) {
    width: 30vw;
  }

  h2 {
    margin-bottom: 1rem;
    color: #e1cf7d;
    text-align: center;
  }

  select,
  input {
    width: 70vw;
    padding: 1rem;
    border-radius: 10px;
    background-color: #e1cf7d;
    border: none;
    font-size: 1.3rem;
    display: grid;

    @media (min-width: 1200px) {
      width: 25vw;
      padding: 0.2rem;
      font-size: 1rem;
    }
  }

  input::placeholder {
    font-size: 1.6rem;
    color: #963c08;

    @media (min-width: 1200px) {
      font-size: 0.8rem;
    }
  }

  label {
    font-size: 1.5rem;
    color: #e1cf7d;

    @media (min-width: 1200px) {
      font-size: 1rem;
    }

    span {
      margin-left: 0.4rem;
    }
  }
`;
export const ButtonForm = styled.button`
  width: 50%;
  margin: auto;
  border: none;
  font-size: 1rem;
  background-color: #8c0000;
  color: #e1cf7d;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #3a6332;
  }
`;
