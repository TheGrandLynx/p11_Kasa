import logo from '../../assets/logoFooter.svg'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo de kasa" />
      <p className="footer__pRights">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
