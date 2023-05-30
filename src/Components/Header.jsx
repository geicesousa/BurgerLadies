import burguerLogo from '../assets/ladies.png'
import { HeaderContainer } from '../styles/Header.styles'

const Header = () => {
  return(
    <HeaderContainer>
       <img src={burguerLogo} />     
    </HeaderContainer>
  )
}

export default Header

