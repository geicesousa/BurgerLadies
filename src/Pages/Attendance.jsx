import { Link } from 'react-router-dom'
import { ButtonContainer } from '../styles/Button.styled'
import  Button  from '../Components/Button'

const Attendance = () => {

  return (
	<ButtonContainer>
    <Button><Link to='/ordered'>Novo pedido</Link></Button>
    
      <Button>Pedidos prontos</Button>
      <Button>Pedidos entregues</Button>
      <Button>Pedidos pendentes</Button>
  </ButtonContainer>
  )
}

export default Attendance

