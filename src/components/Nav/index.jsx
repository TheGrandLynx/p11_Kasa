import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navHeader">
      <Link to="/" className="navHeader__linkHome">
        Accueil
      </Link>
      <Link to="/about" className="navHeader__linkAbout">
        A Propos
      </Link>
    </nav>
  )
}

export default Nav
