import { useState } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import { properties, propertyTypes, propertyStatuses, propertyLocations } from '../../data/properties'
import './RealEstate.css'

const whyItems = [
  { icon: 'fas fa-search', title: 'Wide Listing Portfolio', desc: 'Access hundreds of verified residential, commercial, and land listings across Rwanda.' },
  { icon: 'fas fa-handshake', title: 'End-to-End Assistance', desc: 'From property search to viewing, negotiation, and paperwork — we guide you every step.' },
  { icon: 'fas fa-map', title: 'Local Market Expertise', desc: 'Our agents know Kigali neighborhoods deeply and provide honest investment advice.' },
  { icon: 'fas fa-file-contract', title: 'Legal & Title Support', desc: 'We help verify land titles, connect you with notaries, and ensure transactions are clean and secure.' },
]

function RealEstate() {
  const [activeType, setActiveType] = useState('All')
  const [activeStatus, setActiveStatus] = useState('All')
  const [activeLocation, setActiveLocation] = useState('All')

  const filtered = properties.filter(p => {
    const typeMatch = activeType === 'All' || p.type === activeType
    const statusMatch = activeStatus === 'All' || p.status === activeStatus
    const locationMatch = activeLocation === 'All' || p.location.includes(activeLocation)
    return typeMatch && statusMatch && locationMatch
  })

  return (
    <div className="real-estate">
      <HeroSection
        size="medium"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80"
        overlay={0.6}
        badge={{ icon: 'fas fa-building', text: 'Real Estate' }}
        title={<>Find Your Perfect <span>Space in Rwanda</span></>}
        subtitle="Homes, apartments, commercial properties, and land — we connect you with the right property at the right price. No hidden fees."
        buttons={[
          { label: 'Browse Listings', to: '#listings', variant: 'btn-primary', icon: 'fas fa-search' },
          { label: 'WhatsApp Us', href: 'https://wa.me/250788616618', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
      />

      {/* Services Banner */}
      <div className="re-services-bar">
        <div className="container re-services-bar__inner">
          {[
            { icon: 'fas fa-home', label: 'Residential' },
            { icon: 'fas fa-store', label: 'Commercial' },
            { icon: 'fas fa-map', label: 'Land & Plots' },
            { icon: 'fas fa-key', label: 'Rentals' },
            { icon: 'fas fa-chart-line', label: 'Investments' },
          ].map((s, i) => (
            <div key={i} className="re-services-bar__item">
              <i className={s.icon}></i>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Listings */}
      <section id="listings" className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            label="Property Listings"
            title="Discover Your Next Property"
            subtitle="Browse our curated selection of verified properties. Inquire directly — no online payment required."
          />

          {/* Filters */}
          <div className="re-filters">
            <div className="re-filter-group">
              <label>Property Type</label>
              <div className="re-filter-chips">
                {propertyTypes.map(t => (
                  <button key={t} className={`re-chip ${activeType === t ? 'is-active' : ''}`} onClick={() => setActiveType(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="re-filter-group">
              <label>Status</label>
              <div className="re-filter-chips">
                {propertyStatuses.map(s => (
                  <button key={s} className={`re-chip ${activeStatus === s ? 'is-active' : ''}`} onClick={() => setActiveStatus(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="re-filter-group">
              <label>Location</label>
              <div className="re-filter-chips">
                {propertyLocations.slice(0, 6).map(l => (
                  <button key={l} className={`re-chip ${activeLocation === l ? 'is-active' : ''}`} onClick={() => setActiveLocation(l)}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="re-results-count">
            <strong>{filtered.length}</strong> propert{filtered.length !== 1 ? 'ies' : 'y'} found
          </p>

          {filtered.length > 0 ? (
            <div className="re-grid">
              {filtered.map(property => <PropertyCard key={property.id} property={property} />)}
            </div>
          ) : (
            <div className="re-empty">
              <i className="fas fa-building"></i>
              <p>No properties match your current filters.</p>
              <button
                className="btn btn-outline"
                onClick={() => { setActiveType('All'); setActiveStatus('All'); setActiveLocation('All') }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Fido Real Estate */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="re-why__grid">
            <div className="re-why__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=700&q=80"
                alt="Fido real estate services"
              />
              <div className="re-why__image-tag">
                <i className="fas fa-award"></i>
                <div>
                  <strong>180+ Listings</strong>
                  <span>Verified Properties</span>
                </div>
              </div>
            </div>
            <div>
              <SectionTitle
                label="Why Choose Fido"
                title="Your Trusted Real Estate Partner in Rwanda"
                subtitle="Whether you're buying your first home, expanding a business, or making a strategic land investment — we have the expertise to guide you."
              />
              <div className="re-why__items">
                {whyItems.map((item, i) => (
                  <div key={i} className="re-why__item">
                    <div className="re-why__icon"><i className={item.icon}></i></div>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            label="Our Process"
            title="How We Help You Find the Right Property"
            center
          />
          <div className="re-process__grid">
            {[
              { icon: 'fas fa-comment', label: 'Tell Us Your Needs', desc: 'Share your requirements — type, location, budget, timeline — and we start the search.' },
              { icon: 'fas fa-list-ul', label: 'We Shortlist for You', desc: 'We curate a selection of properties that match your criteria from our verified portfolio.' },
              { icon: 'fas fa-door-open', label: 'Property Viewings', desc: 'We arrange and accompany you on property visits at your convenience.' },
              { icon: 'fas fa-file-signature', label: 'Deal & Paperwork', desc: 'We assist with negotiations, pricing, and connect you with legal support for a smooth close.' },
            ].map((step, i) => (
              <div key={i} className="re-process__step">
                <div className="re-process__icon"><i className={step.icon}></i></div>
                <div className="re-process__step-num">{i + 1}</div>
                <h4>{step.label}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        badge={{ icon: 'fas fa-building', text: 'Find Your Property' }}
        title="Ready to Find Your Perfect Property?"
        subtitle="Reach out and let our real estate specialists guide you. Whether buying, renting, or investing — we make it straightforward."
        buttons={[
          { label: 'Make an Inquiry', to: '/contact', variant: 'btn-primary', icon: 'fas fa-envelope' },
          { label: 'Chat on WhatsApp', href: 'https://wa.me/250788616618', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
        variant="dark"
      />
    </div>
  )
}

export default RealEstate
