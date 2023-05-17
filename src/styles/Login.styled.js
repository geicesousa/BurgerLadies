import styled from "styled-components";

export const Form = styled.form`
	background-color: #963C08;
	display: grid;
	justify-content: center;
	align-items: center;
	width: 60vw;
	height: auto;
	margin: auto;
	margin-top: 3rem;
	gap: 2rem;
	border-radius: 10px;
	padding: 5rem;

	@media (min-width: 1500px) {
    width: 40vw;	
  }

		select, input {
		width: 50vw;
		padding: 1rem;
		margin: .5rem;
		border-radius: 10px;
		background-color: #E1CF7D;
		border: none;
		font-size: 1.3rem;
		display: grid;
		
			@media (min-width: 1500px) {
				width: 30vw;
				padding: .5rem;	
				margin: .1rem;
			}
	}

	input::placeholder{
		font-size: 1.3rem;
		color: #963C08;
	}

	label{
		font-size: 1.3rem;		
		color: #E1CF7D;		
				
		span{
			margin-left: 1rem
		}
	}



`
export const Button = styled.button`
	border: none;
	font-size: 1.3rem;
	background-color: #03300b;
	color: #E1CF7D;
	text-transform: uppercase;
	font-weight: bold;
	padding: 1rem;
	border-radius: 20px;

	:hover {
		background-color: #3a6332;
  }


`
