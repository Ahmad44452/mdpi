import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <nav className="navbar">
      <img src="./images/logo.png" className="navbar__logo" />
      <div className="navbar__links">
        <Link to='/' className="navbar__links--link">Journals</Link>
        <Link to='/' className="navbar__links--link">Topics</Link>
        <Link to='/' className="navbar__links--link">Information</Link>
        <Link to='/' className="navbar__links--link">Author Services</Link>
        <Link to='/' className="navbar__links--link">Initiatives</Link>
        <Link to='/' className="navbar__links--link">About</Link>
      </div>
      <div className="navbar__buttons">
        <Link to='/' className="navbar__buttons--button navbar__buttons--signin">Sign in</Link>
        <Link to='/' className="navbar__buttons--button navbar__buttons--submit">Submit</Link>
      </div>
    </nav>
  )
}

export default NavbarTop;