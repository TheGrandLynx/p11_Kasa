import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <div>
      <img src={logo} alt="Kasa" className="ks-logo" />

      <nav ks-menu>
        <Link to="/">Accueil</Link>
        <Link to="/About">A propos</Link>
      </nav>
    </div>
  )
}

export default Header
