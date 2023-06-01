import styled from "styled-components";

export const CustomInput = styled.input `
	  width: 70vw;
    padding: 1rem;
    border-radius: 10px;
    background-color: #e1cf7d;
    border: none;
    font-size: 1.3rem;   


	@media (min-width: 1200px) {
      width: 25vw;
      padding: 0.2rem;
      font-size: 1rem;
    }

	input::placeholder {
    font-size: 1.6rem;
    color: #963c08;

    @media (min-width: 1200px) {
      font-size: 0.8rem;
    }
  }

`