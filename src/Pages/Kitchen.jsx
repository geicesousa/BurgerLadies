import React from 'react'
import { ButtonContainer } from '../styles/Button.styled'
import  Button  from '../Components/Button'


function Kitchen() {
  return (
	<ButtonContainer >
      <Button>Pedidos pendentes</Button>
      <Button>Pedidos prontos</Button>
      <Button>Pedidos entregues</Button>      
  </ButtonContainer>
  
  )
}

export default Kitchen