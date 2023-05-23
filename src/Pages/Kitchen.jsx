import React from 'react'
import { ButtonContainer } from '../styles/Home.styled'
import { Button } from '../styles/Home.styled'
import { Link } from 'react-router-dom'

function Kitchen() {
  return (
	<ButtonContainer >
      <Button type='submit'>
        <Link to='/menu'>
        Novo pedido
        </Link>      
      </Button>
      <Button>Pedidos prontos</Button>
      <Button>Pedidos entregues</Button>
      <Button>Pedidos pendentes</Button>
  </ButtonContainer>
  
  )
}

export default Kitchen