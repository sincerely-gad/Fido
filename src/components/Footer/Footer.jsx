import { Link } from 'react-router-dom'
import './Footer.css'
import logoUrl from '../../../img/logo.jpeg'

const officeMapUrl = 'https://www.google.com/maps/place/1%C2%B059%2703.2%22S+30%C2%B006%2718.4%22E/@-1.984209,30.1025441,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.984209!4d30.105119?hl=en&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D'
const instagramUrl = 'https://www.instagram.com/fidocarrental__?igsh=YWZkZDNuMDNlN3Mw'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              <img
                src={logoUrl}
                alt="Fido Car Rental & General Supply"
                className="footer__logo-img"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              <div className="footer__logo-text" style={{ display: 'none' }}>
                <div className="footer__logo-icon">
                  <i className="fas fa-car"></i>
                </div>
                <div>
                  <span className="footer__logo-name">FIDO</span>
                  <span className="footer__logo-sub">Car Rental & General Supply</span>
                </div>
              </div>
            </Link>
            <p className="footer__tagline">
              Rwanda's trusted car rental, flight booking, and real estate company. One partner for all your travel and property needs.
            </p>
            <div className="footer__socials">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              <li><Link to="/cars"><i className="fas fa-car"></i> Car Rentals</Link></li>
              <li><Link to="/flights"><i className="fas fa-plane"></i> Flight Booking</Link></li>
              <li><Link to="/real-estate"><i className="fas fa-building"></i> Real Estate</Link></li>
              <li><Link to="/contact"><i className="fas fa-headset"></i> Travel Consultation</Link></li>
              <li><Link to="/contact"><i className="fas fa-users"></i> Group & Corporate</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
              <li><Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link></li>
              <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact Us</Link></li>
              <li><Link to="/cars"><i className="fas fa-key"></i> Book a Car</Link></li>
              <li><Link to="/real-estate"><i className="fas fa-search"></i> Find Property</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <a href={officeMapUrl} target="_blank" rel="noopener noreferrer">
                  1°59'03.2"S 30°06'18.4"E<br />Kigali, Rwanda
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+250788616618">0788616618</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:fidocarrental@gmail.com">fidocarrental@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Mon–Sat: 7:00 AM – 8:00 PM<br />Sun: 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
            <a
              href="https://wa.me/250788616618"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm footer__wa-btn"
            >
              <i className="fab fa-whatsapp"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Fido Car Rental & General Supply. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/250788616618"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  )
}

export default Footer
