import burguerLogo from '../assets/burguerLogo.png'
import { HeaderContainer } from '../styles/Header.styles'

const Header = () => {
  return(
    <HeaderContainer>
      <img width='300px'src={burguerLogo} />
    </HeaderContainer>
  )
}

export default Header

