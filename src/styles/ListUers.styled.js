import styled from "styled-components";


export const UsersContainer = styled.ul `
 	display: flex;
  	flex-wrap: wrap;
  	list-style: none;
	align-items: center;
	justify-content: center;  	
`

export const CardUsers = styled.li`
	width: 20rem;
	height: auto;
	border-radius: 15px;
	font-size: 1.2rem;
	background-color: #E1CF7D;
	border: .5rem solid #963C08;
	margin: 1rem;
	padding: 2rem;
	align-items: center;
`

export const H3 = styled.h3 `
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;  	  
`

export const BtnsUsers = styled.div `
	display: inline-flex;
	gap: .5rem;	

	button {
		border-radius: 10px;
		margin-top: 2rem;
		border: none;
		background-color: #963C08;
		color: #E1CF7D;
		padding: .1rem;
		cursor: pointer;

		:hover {
			background-color: #763C09;
  }
	}

`

