import { Link } from 'react-router-dom'
import './ServiceCard.css'

function ServiceCard({ icon, title, description, to, color, features = [] }) {
  return (
    <Link to={to} className="service-card">
      <div className="service-card__icon-wrap" style={{ '--card-color': color }}>
        <i className={icon}></i>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      {features.length > 0 && (
        <ul className="service-card__features">
          {features.map((f, i) => (
            <li key={i}><i className="fas fa-check"></i>{f}</li>
          ))}
        </ul>
      )}
      <div className="service-card__cta">
        Learn More <i className="fas fa-arrow-right"></i>
      </div>
    </Link>
  )
}

export default ServiceCard
