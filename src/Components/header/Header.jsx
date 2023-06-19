import { ArrowFatLineLeft, SignOut } from 'phosphor-react'
import { Link, useNavigate } from "react-router-dom";
import { ContainerHeader, IconesMenu } from './Header.styled'
import { Return, SignOutDiv } from '../../Pages/ordered/MyCart.styled'
import { logout } from '../../Pages/login/Login'
import burguerLogo from "../../assets/ladies.png";

function Header() {
	
	function sair(){
		logout()
		useNavigate("/")
	}

  return (
	<ContainerHeader>
	  <>
      <img src={burguerLogo} />
      </> 
	<IconesMenu>
	<Return>
		<ArrowFatLineLeft><Link></Link></ArrowFatLineLeft>
			{/* // size={32}
			// weight="bold"
			// color={"black"}
			// onClick={() => setShow(true)}
		  /> */}
		  <span>Voltar</span>
		</Return>
		<Link onClick={() => sair()}>
        <SignOutDiv>
          <SignOut/>
          <span>Sair</span>
        </SignOutDiv>
        </Link>
	  </IconesMenu>
  </ContainerHeader>
  )
}

export default Header