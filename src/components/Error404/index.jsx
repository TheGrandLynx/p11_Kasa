import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className="error404Container">
      <p className="error404Container__Number">404</p>
      <p className="error404Container__Text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error404Container__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error404
