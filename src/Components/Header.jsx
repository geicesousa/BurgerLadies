import burguerLogo from '../assets/ladies.png'
import { HeaderContainer } from '../styles/Header.styles'

const Header = () => {
  return(
    <HeaderContainer>
      <img width='480px'src={burguerLogo} />
    </HeaderContainer>
  )
}

export default Header

