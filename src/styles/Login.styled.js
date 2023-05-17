import styled from "styled-components";

export const Form = styled.form`
	background-color: #963C08;
	font-family: 'Pacifico';
	display: grid;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 90%;
	margin: auto;
	margin-top: 5rem;
	gap: 2rem;
	border-radius: 10px;
	padding: 5rem;

	select, input {
		width: 60vw;
		padding: 1.3rem;
		margin: .5rem;
		border-radius: 10px;
		background-color: #E1CF7D;
		border: none;
		font-size: 1.5rem;
	}

	input::placeholder{
		font-size: 1.5rem;
		color: #963C08;
	}

	label{
		font-size: 1.5rem;
		font-weight: bold;
		color: #E1CF7D;
		
				
		span{
			margin-left: 1rem
		}
	}
`
export const Button = styled.button`
	border: none;
	font-size: 2rem;
	background-color: transparent;
	color: #E1CF7D;
	text-transform: uppercase;
	font-weight: bold;
	font-family: 'Aladin';
	margin-top: 2rem;

`

