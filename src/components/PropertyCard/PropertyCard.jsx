import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import './PropertyCard.css'

function PropertyCard({ property }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
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

  useEffect(() => {
    if (!isVideoOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsVideoOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVideoOpen])

  const openVideo = () => {
    if (video) {
      setIsVideoOpen(true)
    }
  }

  const playPreview = (event) => {
    event.currentTarget.querySelector('video')?.play()
  }

  const pausePreview = (event) => {
    const preview = event.currentTarget.querySelector('video')
    if (!preview) return

    preview.pause()
    preview.currentTime = 0
  }

  const handleVideoKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openVideo()
    }
  }

  return (
    <div className="prop-card">
      <div
        className={`prop-card__image-wrap ${video ? 'prop-card__image-wrap--video' : ''}`}
        role={video ? 'button' : undefined}
        tabIndex={video ? 0 : undefined}
        onClick={openVideo}
        onKeyDown={video ? handleVideoKeyDown : undefined}
        onMouseEnter={video ? playPreview : undefined}
        onMouseLeave={video ? pausePreview : undefined}
        onFocus={video ? playPreview : undefined}
        onBlur={video ? pausePreview : undefined}
        aria-label={video ? `Open full screen video for ${title}` : undefined}
      >
        {video ? (
          <>
            <video
              src={video}
              poster={image}
              className="prop-card__image prop-card__video"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={title}
            />
            <span className="prop-card__video-action" aria-hidden="true">
              <i className="fas fa-expand"></i>
            </span>
          </>
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

      {isVideoOpen && createPortal(
        <div
          className="prop-card__video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} video`}
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            type="button"
            className="prop-card__video-close"
            onClick={() => setIsVideoOpen(false)}
            aria-label="Close video"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="prop-card__video-modal-content" onClick={(event) => event.stopPropagation()}>
            <video
              src={video}
              poster={image}
              className="prop-card__video-full"
              controls
              autoPlay
              playsInline
            />
            <div className="prop-card__video-title">{title}</div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default PropertyCard
