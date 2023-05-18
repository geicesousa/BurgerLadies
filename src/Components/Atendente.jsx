import { Link } from 'react-router-dom'
import { Button, ButtonContainer } from '../styles/Home.styled'

const Atendente = () => {  
  return (
	<ButtonContainer>
      <Button><Link to='/novopedido'></Link>Novo pedido</Button>
      <Button>Pedidos prontos</Button>
      <Button>Pedidos entregues</Button>
      <Button>Pedidos pendentes</Button>
  </ButtonContainer>
  )
}

export default Atendente

