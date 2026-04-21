import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import logoUrl from '../../../img/logo.jpeg'
import { WHATSAPP_URL } from '../../utils/whatsapp'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/cars', label: 'Car Rentals' },
  { path: '/flights', label: 'Flights' },
  { path: '/real-estate', label: 'Real Estate' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img
            src={logoUrl}
            alt="Fido Car Rental & General Supply"
            className="navbar__logo-img"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
          />
          <div className="navbar__logo-text" style={{ display: 'none' }}>
            <div className="navbar__logo-icon">
              <i className="fas fa-car"></i>
            </div>
            <div>
              <span className="logo-name">FIDO</span>
              <span className="logo-tagline">Car Rental & General Supply</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm navbar__cta">
            Book Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? 'is-active' : ''}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-actions">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            onClick={closeMenu}
          >
            <i className="fab fa-whatsapp"></i>
            Chat on WhatsApp
          </a>
          <Link to="/contact" className="btn btn-primary btn-lg" onClick={closeMenu}>
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div className="navbar__overlay" onClick={closeMenu} />
      )}
    </header>
  )
}

export default Navbar
