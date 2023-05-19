import { Link } from 'react-router-dom'
import { Button, ButtonContainer } from '../styles/Home.styled'

const Atendente = () => {

  return (
	<ButtonContainer>
      <Button type='submit'>
        <Link to='/novopedido'>
        Novo pedido
        </Link>      
      </Button>
      <Button>Pedidos prontos</Button>
      <Button>Pedidos entregues</Button>
      <Button>Pedidos pendentes</Button>
  </ButtonContainer>
  )
}

export default Atendente

