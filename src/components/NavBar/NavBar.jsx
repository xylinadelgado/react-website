import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/valleyrootslogo.png'
import search_icon_dark from '../../assets/search-dark.png'
import toggle_light from '../../assets/toggle-light.png'

function NavBar() {
  return (
    <nav className="navbar">

      {/* LEFT: Logo (Home) */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="ValleyRoots logo" className="logo" />
      </Link>

      {/* CENTER: Nav Links */}
      <div className="nav-links">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>

      {/* RIGHT: Search + Toggle */}
      <div className="nav-actions">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={search_icon_dark} alt="Search" className="search-icon" />
        </div>

        <img src={toggle_light} alt="Toggle theme" className="toggle-icon" />
      </div>

    </nav>
  )
}

export default NavBar
