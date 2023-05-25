import React from 'react'
import { ButtonContainer } from '../styles/Home.styled'
import { Button } from '../styles/Home.styled'
import { Link } from 'react-router-dom'

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