import { Link } from 'react-router-dom'
import './CTA.css'
import { WHATSAPP_URL } from '../../utils/whatsapp'

function CTA({
  badge,
  title,
  subtitle,
  buttons = [],
  variant = 'dark',
}) {
  return (
    <section className={`cta cta--${variant}`}>
      <div className="cta__pattern"></div>
      <div className="container cta__inner">
        <div className="cta__content">
          {badge && (
            <span className="badge badge-white cta__badge">
              <i className={badge.icon}></i>
              {badge.text}
            </span>
          )}
          <h2 className="cta__title">{title}</h2>
          {subtitle && <p className="cta__subtitle">{subtitle}</p>}
        </div>
        {buttons.length > 0 && (
          <div className="cta__buttons">
            {buttons.map((btn, i) => {
              const href = btn.href === 'whatsapp' ? WHATSAPP_URL : btn.href
              const isExternal = href?.startsWith('http')
              if (isExternal) {
                return (
                  <a
                    key={i}
                    href={href}
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
      </div>
    </section>
  )
}

export default CTA
