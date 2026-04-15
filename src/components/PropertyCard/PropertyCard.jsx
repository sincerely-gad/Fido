import { Link } from 'react-router-dom'
import './PropertyCard.css'

function PropertyCard({ property }) {
  const { title, location, type, status, bedrooms, bathrooms, area, image, video, badge } = property
  const propertyDetails = [
    `Property: ${title}`,
    `Location: ${location}`,
    `Type: ${type}`,
    `Status: ${status}`,
    bedrooms !== null ? `Bedrooms: ${bedrooms}` : '',
    bathrooms !== null ? `Bathrooms: ${bathrooms}` : '',
    area ? `Area: ${area}` : '',
  ].filter(Boolean)

  const inquiryMessage = [
    'Hello Fido team,',
    '',
    'I would like to inquire about this property.',
    '',
    ...propertyDetails,
    '',
    'My questions:',
  ].join('\n')

  const viewingMessage = [
    'Hello Fido team,',
    '',
    'I would like to request a property viewing.',
    '',
    ...propertyDetails,
    '',
    'Preferred viewing date/time:',
    'Additional notes:',
  ].join('\n')

  return (
    <div className="prop-card">
      <div className="prop-card__image-wrap">
        {video ? (
          <video
            src={video}
            poster={image}
            className="prop-card__image prop-card__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title}
          />
        ) : (
          <img src={image} alt={title} className="prop-card__image" loading="lazy" />
        )}
        {badge && <span className="prop-card__badge">{badge}</span>}
        <span className={`prop-card__status prop-card__status--${status === 'For Sale' ? 'sale' : 'rent'}`}>
          {status}
        </span>
        <div className="prop-card__type">{type}</div>
      </div>
      <div className="prop-card__body">
        <h3 className="prop-card__title">{title}</h3>
        <p className="prop-card__location">
          <i className="fas fa-map-marker-alt"></i>
          {location}
        </p>
        <div className="prop-card__features">
          {bedrooms !== null && (
            <div className="prop-card__feature">
              <i className="fas fa-bed"></i>
              <span>{bedrooms} Beds</span>
            </div>
          )}
          {bathrooms !== null && (
            <div className="prop-card__feature">
              <i className="fas fa-bath"></i>
              <span>{bathrooms} Baths</span>
            </div>
          )}
          {area && (
            <div className="prop-card__feature">
              <i className="fas fa-vector-square"></i>
              <span>{area}</span>
            </div>
          )}
        </div>
        <div className="prop-card__footer">
          <div className="prop-card__price">Price is negotiable</div>
          <div className="prop-card__actions">
            <Link
              to="/contact"
              state={{ contactForm: { subject: 'realestate', message: inquiryMessage } }}
              className="btn btn-outline btn-sm"
            >
              Inquire Now
            </Link>
            <Link
              to="/contact"
              state={{ contactForm: { subject: 'realestate', message: viewingMessage } }}
              className="btn btn-primary btn-sm"
            >
              Request Viewing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
