import styled from "styled-components";

export const DivMenu = styled.div`
  background-color: #963C08;
  width: 90vw;
  height: auto;
  margin: auto;
  gap: 2rem;
  border-radius: 10px;
  padding: 2rem;
  overflow: auto;
  
    h4{
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 1rem;     
    }
`
export const FormClient= styled.form`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-left: 1rem;
    align-content: flex-start;

    input, select{
      width: 12rem;
      border-radius: 10px;
      padding: .5rem;
      background-color: #E1CF7D;
      margin-right: 1rem;    
    }

    span{
        font-weight: bold;
      }
  `

  export const CategoryMenu = styled.section`
  margin: auto;
  width: 99%;
  height: auto;
  background-color: #F0B04E;
  margin-bottom: 2rem;
  border-radius: 15px;
  padding: 1rem;

    li{     
      margin: .4rem;
      font-size: 1rem;    
    }
  
  `
export const SectionItens = styled.section `
  display: flex;
	justify-content: space-between;
  flex-direction: row;  
  margin: .4rem;
`

export const DivButtons = styled.div `
  	display: flex;
  	flex-wrap: wrap;
    justify-content: center;  
`

export const Button = styled.button `
    width: auto;
    margin-bottom: 2rem;
    background-color: #F0B04E;
    gap: 2rem;
    padding: .5rem;
    margin: .5rem;
    margin-bottom: .8rem;
    border: none;
    border-radius: 10px;
    font-size: .8rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
`
