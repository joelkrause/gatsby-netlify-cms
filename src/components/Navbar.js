import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
 
 render() {
   return (
  
  <header className="site_header" role="navigation" aria-label="main-navigation">
    <div className="wrapper">
      <div class="logo">
      <Link to="/" className="navbar-item" title="Logo">
      J.
      </Link>
      </div>
      <nav>
        <input type="checkbox" id="navbar__burger" className="navbar__burger"/>
        <label for="navbar__burger" className="navbar__burger">
          <span></span>
          <span></span>
        </label>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Posts</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )}
}

export default Navbar
