import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="header-root">
      <div className="header-inner container">
        <div className="header-title">
          <span className="brand">F1</span>
          <span className="label">Championship</span>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#races">Races</a>
          <a href="#standings">Standings</a>
          <a href="#">Teams</a>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav container">
          <a href="#">Home</a>
          <a href="#races">Races</a>
          <a href="#standings">Standings</a>
          <a href="#">Teams</a>
        </nav>
      )}
    </header>
  )
}
