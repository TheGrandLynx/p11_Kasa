import logo from '../../assets/logo.svg'
import Nav from '../Nav/'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kasa" className="header__logo" />

      <Nav />
    </div>
  )
}

export default Header
