import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection({
  badge,
  title,
  subtitle,
  backgroundImage,
  gradient,
  buttons = [],
  size = 'full',
  overlay = 0.55,
  children,
}) {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(12,30,53,${overlay}), rgba(12,30,53,${overlay + 0.1})), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {
        background: gradient || 'linear-gradient(135deg, #0c1e35 0%, #163356 50%, #1e4a7e 100%)',
      }

  return (
    <section
      className={`hero hero--${size}`}
      style={bgStyle}
    >
      <div className="hero__overlay-pattern"></div>
      <div className="container hero__content">
        {badge && (
          <div className="badge badge-white hero__badge">
            <i className={badge.icon}></i>
            {badge.text}
          </div>
        )}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {buttons.length > 0 && (
          <div className="hero__buttons">
            {buttons.map((btn, i) => {
              const isExternal = btn.href?.startsWith('http')
              if (isExternal) {
                return (
                  <a
                    key={i}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-lg ${btn.variant || 'btn-primary'}`}
                  >
                    {btn.icon && <i className={btn.icon}></i>}
                    {btn.label}
                  </a>
                )
              }
              return (
                <Link
                  key={i}
                  to={btn.to || '/contact'}
                  className={`btn btn-lg ${btn.variant || 'btn-primary'}`}
                >
                  {btn.icon && <i className={btn.icon}></i>}
                  {btn.label}
                </Link>
              )
            })}
          </div>
        )}
        {children}
      </div>
      <div className="hero__scroll-hint">
        <div className="hero__scroll-dot"></div>
      </div>
    </section>
  )
}

export default HeroSection
