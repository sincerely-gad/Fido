import './SectionTitle.css'

function SectionTitle({ label, title, subtitle, center = false, light = false }) {
  return (
    <div className={`section-title ${center ? 'section-title--center' : ''} ${light ? 'section-title--light' : ''}`}>
      {label && (
        <span className="section-title__label">
          <span className="section-title__label-dot"></span>
          {label}
        </span>
      )}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
