import styled from "styled-components";

export const ButtonContainer = styled.main`
	margin: auto;
	padding: 5rem;
	margin-top: 1rem;
	width: 90vw;
`

export const ButtonGlobal = styled.button`
	margin: auto;
	display: flex;
	width: 50%;
	align-items: center;
	justify-content: center;	
	padding: 2rem;
	border-radius: 10px;
	margin-top: 2rem;
	background-color: #963C08;
	color: #E1CF7D;
	text-transform: uppercase;	
	border: none;
	font-weight: bold;
	cursor: pointer;

	a{
		color: #E1CF7D;
	}

	:hover {
		background-color: #763C09;
  }


`