import styled from "styled-components"; 

export const Article = styled.article `
    width: 60%;
    margin: auto;
`
export const CartBox = styled.div `
 	display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    border-bottom: 2px solid skyblue;
    padding-bottom: 5px;
`

export const CartImg = styled.div `
	display: flex;
    width: 400px;

	p {
        color: black;
    	font-weight: bold;
    	margin-left: 10px;
	}
`

export const Total = styled.div `
	display: flex;
    justify-content: space-between;

`