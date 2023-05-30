import { Link } from 'react-router-dom'
import burguerLogo from '../assets/ladies.png'
import { HeaderContainer } from '../styles/Header.styles'
import { TiShoppingCart } from 'react-icons/ti'


const Header = ({size, setShow}) => {
  return(
    <HeaderContainer>
      <span onClick={() => setShow(true)}>
      <img src={burguerLogo} />
      </span>
     
      <Link onClick={()=>setShow(false)}>
        <TiShoppingCart color="black" size={52}/>    
        <span>{size}</span>     
      </Link>
    </HeaderContainer>
  )
}

export default Header

