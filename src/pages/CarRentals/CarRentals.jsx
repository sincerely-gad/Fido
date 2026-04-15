import { useState } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import CarCard from '../../components/CarCard/CarCard'
import CTA from '../../components/CTA/CTA'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { cars, carTypes, transmissionTypes } from '../../data/cars'
import './CarRentals.css'

const howItWorks = [
  {
    icon: 'fas fa-search',
    title: 'Browse & Choose',
    desc: 'Browse our fleet and pick the car that suits your needs and budget.',
  },
  {
    icon: 'fas fa-paper-plane',
    title: 'Submit a Request',
    desc: 'Fill out the booking form or contact us via WhatsApp with your travel dates.',
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'We Confirm',
    desc: 'Our team contacts you within 2 hours to confirm availability and details.',
  },
  {
    icon: 'fas fa-car',
    title: 'Pick Up & Go',
    desc: 'Pay on pickup or delivery. Your car will be ready, clean, and fueled.',
  },
]

function CarRentals() {
  const [activeType, setActiveType] = useState('All')
  const [activeTransmission, setActiveTransmission] = useState('All')
  const [priceRange, setPriceRange] = useState(200)

  const filtered = cars.filter(car => {
    const typeMatch = activeType === 'All' || car.type === activeType
    const transmissionMatch = activeTransmission === 'All' || car.transmission === activeTransmission
    const priceMatch = car.pricePerDay <= priceRange
    return typeMatch && transmissionMatch && priceMatch
  })

  return (
    <div className="car-rentals">
      <HeroSection
        size="medium"
        backgroundImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=80"
        overlay={0.6}
        badge={{ icon: 'fas fa-car', text: 'Car Rentals' }}
        title={<>Drive Rwanda in <span>Style & Comfort</span></>}
        subtitle="From budget-friendly sedans to luxury SUVs — choose the perfect vehicle for your journey. Self-drive or with a professional driver."
        buttons={[
          { label: 'View Fleet', to: '#fleet', variant: 'btn-primary', icon: 'fas fa-car' },
          { label: 'WhatsApp Us', href: 'https://wa.me/250788616618', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
      />

      {/* Info Banner */}
      <div className="car-rentals__info-banner">
        <div className="container car-rentals__info-inner">
          <div className="car-rentals__info-item">
            <i className="fas fa-info-circle"></i>
            <span><strong>No online payment required.</strong> Submit a request and we'll confirm availability and pricing directly.</span>
          </div>
          <a href="https://wa.me/250788616618" className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> Quick Inquiry
          </a>
        </div>
      </div>

      {/* Fleet Section */}
      <section id="fleet" className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            label="Our Fleet"
            title="Choose Your Perfect Ride"
            subtitle="All vehicles are regularly serviced, insured, and available with flexible booking options."
          />

          {/* Filters */}
          <div className="car-rentals__filters">
            <div className="car-rentals__filter-group">
              <label>Vehicle Type</label>
              <div className="car-rentals__filter-chips">
                {carTypes.map(type => (
                  <button
                    key={type}
                    className={`car-rentals__chip ${activeType === type ? 'is-active' : ''}`}
                    onClick={() => setActiveType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="car-rentals__filter-group">
              <label>Transmission</label>
              <div className="car-rentals__filter-chips">
                {transmissionTypes.map(t => (
                  <button
                    key={t}
                    className={`car-rentals__chip ${activeTransmission === t ? 'is-active' : ''}`}
                    onClick={() => setActiveTransmission(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="car-rentals__filter-group">
              <label>Max Price: <strong>${priceRange}/day</strong></label>
              <input
                type="range"
                min="40"
                max="200"
                step="5"
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="car-rentals__range"
              />
            </div>
          </div>

          {/* Results Count */}
          <p className="car-rentals__results-count">
            Showing <strong>{filtered.length}</strong> vehicle{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="car-rentals__grid">
              {filtered.map(car => <CarCard key={car.id} car={car} />)}
            </div>
          ) : (
            <div className="car-rentals__empty">
              <i className="fas fa-car-side"></i>
              <p>No vehicles match your filters. Try adjusting your criteria.</p>
              <button className="btn btn-outline" onClick={() => { setActiveType('All'); setActiveTransmission('All'); setPriceRange(200) }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            label="Booking Process"
            title="How to Rent a Car with Fido"
            subtitle="No complicated forms, no online payment required. Just contact us and we handle the rest."
            center
          />
          <div className="car-rentals__how-grid">
            {howItWorks.map((step, i) => (
              <div key={i} className="car-rentals__step">
                <div className="car-rentals__step-num">{i + 1}</div>
                <div className="car-rentals__step-icon">
                  <i className={step.icon}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="car-rentals__includes">
            <div className="car-rentals__includes-content">
              <SectionTitle
                label="What's Included"
                title="Everything You Need for a Smooth Ride"
              />
              <div className="car-rentals__includes-grid">
                {[
                  { icon: 'fas fa-shield-alt', text: 'Comprehensive Insurance' },
                  { icon: 'fas fa-gas-pump', text: 'Full Tank on Pickup' },
                  { icon: 'fas fa-headset', text: '24/7 Roadside Support' },
                  { icon: 'fas fa-map-marker-alt', text: 'Airport Pickup Option' },
                  { icon: 'fas fa-user-tie', text: 'Professional Drivers Available' },
                  { icon: 'fas fa-child', text: 'Baby Seats on Request' },
                  { icon: 'fas fa-wifi', text: 'WiFi Hotspot (Select Cars)' },
                  { icon: 'fas fa-broom', text: 'Clean & Sanitized Vehicles' },
                ].map((item, i) => (
                  <div key={i} className="car-rentals__includes-item">
                    <i className={item.icon}></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="car-rentals__includes-image">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                alt="Premium car rental service"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA
        badge={{ icon: 'fas fa-car', text: 'Ready to Drive?' }}
        title="Book Your Car Today — No Payment Online"
        subtitle="Contact us with your dates and preferred vehicle. We'll confirm availability and arrange everything for you."
        buttons={[
          { label: 'Send Booking Request', to: '/contact', variant: 'btn-primary', icon: 'fas fa-paper-plane' },
          { label: 'Chat on WhatsApp', href: 'https://wa.me/250788616618', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
        variant="dark"
      />
    </div>
  )
}

export default CarRentals
