import { Button, ButtonContainer } from '../styles/Home.styled'

const Atendente = () => {
  return (
	<ButtonContainer>
      <Button>Anotar um novo pedido</Button>
      <Button>Pedidos prontos</Button>
      <Button>Pedidos entregues</Button>
      <Button>Pedidos pendentes</Button>
  </ButtonContainer>
  )
}

export default Atendente