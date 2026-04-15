import { Link } from 'react-router-dom'
import './CarCard.css'

function CarCard({ car }) {
  const { name, type, transmission, fuel, seats, image, badge } = car
  const bookingMessage = [
    'Hello Fido team,',
    '',
    'I would like to request a car booking.',
    '',
    `Vehicle: ${name}`,
    `Type: ${type}`,
    `Transmission: ${transmission}`,
    `Fuel: ${fuel}`,
    `Seats: ${seats}`,
    '',
    'Preferred pickup date/time:',
    'Preferred return date/time:',
    'Pickup location:',
    'Additional notes:',
  ].join('\n')

  return (
    <div className="car-card">
      <div className="car-card__image-wrap">
        <img src={image} alt={name} className="car-card__image" loading="lazy" />
        {badge && <span className="car-card__badge">{badge}</span>}
        <div className="car-card__type-chip">{type}</div>
      </div>
      <div className="car-card__body">
        <h3 className="car-card__name">{name}</h3>
        <div className="car-card__specs">
          <div className="car-card__spec">
            <i className="fas fa-cog"></i>
            <span>{transmission}</span>
          </div>
          <div className="car-card__spec">
            <i className="fas fa-gas-pump"></i>
            <span>{fuel}</span>
          </div>
          <div className="car-card__spec">
            <i className="fas fa-user-friends"></i>
            <span>{seats} Seats</span>
          </div>
        </div>
        <div className="car-card__footer">
          <div className="car-card__availability" aria-label="Available for renting">
            <span className="car-card__availability-dot"></span>
            <span className="car-card__availability-copy">
              <span className="car-card__availability-title">Available</span>
              <span className="car-card__availability-note">for Renting</span>
              <span className="car-card__availability-meta">Price negotiable</span>
            </span>
          </div>
          <Link
            to="/contact"
            state={{ contactForm: { subject: 'car', message: bookingMessage } }}
            className="btn btn-primary btn-sm car-card__btn"
          >
            Request Booking
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarCard
