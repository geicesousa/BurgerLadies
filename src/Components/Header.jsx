import burguerImg from '../assets/burguer.png'
import { HeaderContainer} from '../styles/Header.styles'

const Header = () => {
  return(
    <HeaderContainer>
      <img width='300px'src={burguerImg} />
      <h1>Burger Ladies</h1>    
    </HeaderContainer>
  )
}

export default Header

