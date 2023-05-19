import styled from "styled-components";

export const Form = styled.form`
	background-color: #963C08;
	display: grid;
	justify-content: center;
	align-items: center;
	width: 60vw;
	height: auto;
	margin: auto;
	margin-top: 4rem;
	gap: 1.5rem;
	border-radius: 20px;
	padding: 1rem;

	@media (min-width: 1200px) {
    width: 30vw;	
	}

		select, input {
		width: 50vw;
		padding: .9rem;	
		border-radius: 10px;
		background-color: #E1CF7D;
		border: none;
		font-size: 1.3rem;
		display: grid;
		
			@media (min-width: 1200px) {
				width: 25vw;
				padding: .2rem;
			}
	}

	input::placeholder{
		font-size: 1.6rem;
		color: #963C08;

		@media (min-width: 1200px) {
				font-size:1.2rem;
			}
	}

	label{
		font-size: 1.8rem;		
		color: #E1CF7D;	
		
		@media (min-width: 1200px) {
				font-size:1.2rem;
			}
				
		span{
			margin-left: .4rem
		}
	}


	



`
export const Button = styled.button`
	width: 50%;
	margin: auto;
	border: none;
	font-size: 1.3rem;
	background-color: #03300b;
	color: #E1CF7D;
	text-transform: uppercase;
	font-weight: bold;
	padding: .3rem;
	border-radius: 10px;
	
	:hover {
		background-color: #3a6332;
  }


`

export const ParagrafoErro = styled.p`
	font-size: 1.5rem;
	color: #E1CF7D;
	text-align: center;
	font-weight: bold;

`