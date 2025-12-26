import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/valleyrootslogo.png";
import search_icon_dark from "../../assets/search-dark.png";
import toggle_light from "../../assets/toggle-light.png";

function NavBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const submitSearch = () => {
    onSearch(query.trim());
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="ValleyRoots logo" className="logo" />
      </Link>

      <div className="nav-links">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>

      <div className="nav-actions">
        <form
          className="search-box"
          onSubmit={(e) => {
            e.preventDefault();
            submitSearch();
          }}
        >
          <input
            type="text"
            placeholder="Search thrift, coffee…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <img
            src={search_icon_dark}
            alt="Search"
            className="search-icon"
            onClick={submitSearch}
            style={{ cursor: "pointer" }}
          />
        </form>

        <img src={toggle_light} alt="Toggle theme" className="toggle-icon" />
      </div>
    </nav>
  );
}

export default NavBar;
