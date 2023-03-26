import './styles.scss';

import NavbarTop from './NavbarTop';
import NavbarSearch from './NavbarSearch';

const Navbar = () => {
  return (
    <div className="navbar__container">
      <NavbarTop />
      <NavbarSearch />
    </div>
  )
}

export default Navbar;