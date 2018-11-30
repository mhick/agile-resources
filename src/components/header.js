import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item is-size-3">
        {siteTitle}
      </Link>
    </div>
  </nav>
)

export default Header
