import styled from "styled-components";

export const MainForm = styled.main`
  width: 100vw;
`;

export const Form = styled.form`
  background-color: #963c08;
  width: 80vw;
  height: auto;
  margin: auto;
  margin-top: 2rem;
  gap: 1.5rem;
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    width: 30vw;
  }

  h2 {
    margin-bottom: 0.3rem;
    color: #e1cf7d;
    text-align: center;
  }

  select {
    width: 70vw;
    padding: 0.6rem;
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

  label {
    font-size: 1.2rem;
    color: #e1cf7d;

    @media (min-width: 1200px) {
      font-size: 1rem;
    }

    span {
      margin-left: 0.4rem;
    }
  }
`;

export const Select = styled.select`
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
`;
