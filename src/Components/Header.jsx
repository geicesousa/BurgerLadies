import burguerImg from '../assets/burguer.png'
import { HeaderContainer} from '../styles/Header.styles'

function Header() {
  return(
    <HeaderContainer>
      <img width='300px'src={burguerImg} />
      <h1>Burguer Ladies</h1>    
    </HeaderContainer>
  )
}

export default Header