import styled from "styled-components";

export const DivMenu = styled.div`
  background-color: #963C08;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 50vh;
  margin: auto;
  gap: 2rem;
  border-radius: 10px;
  padding: 2rem;
  overflow: auto;
    p{
      font-size: small;
    }
    section{
    }
    h4{
      text-transform: uppercase;
      text-align: center;
      margin: .5rem auto .5rem;
    }
    ul{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-transform: none;
        li{
          display:flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        h5{
          text-transform: uppercase;
          font-size: 12px;
          margin-top: .8rem;
          
        }
    }
   

`
export const FormClient= styled.form`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evelyn;
  gap: 1rem;
  padding: .8rem;
    label, p{
      font-weight: bold;
    }
    input[name="client"]{
      width: 18rem;
    }
    div{
      display: flex;
      flex-direction: column;
      gap:1rem;
        div{
          flex-direction: row;
          justify-content: space-around;
            button{
              border: none;
              background-color: transparent;
            }

        }
    }

    
`;