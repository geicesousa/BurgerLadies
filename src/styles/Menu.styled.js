import styled from "styled-components";

export const DivMenu = styled.div`
  section{
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  h4{
    text-transform: uppercase;
    text-align: center;
    margin: .5rem auto .5rem;
  }
  h5{
    text-transform: uppercase;
    font-size: .7rem;
  }
  ul{
    display: flex;
    flex-direction: column;
    gap: 5rem;
    text-transform: none;
      li{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: .3rem;
          div span{
            gap: 2rem;
          }
      }
  }
  `