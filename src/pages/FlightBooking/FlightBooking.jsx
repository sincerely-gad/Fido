import { useState } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './FlightBooking.css'
import { CONTACT_EMAIL, getEmailSendErrorMessage, sendEmailRequest } from '../../utils/email'
import { WHATSAPP_URL } from '../../utils/whatsapp'

const services = [
  {
    icon: 'fas fa-plane-departure',
    title: 'Domestic Flights',
    description: 'Travel within Rwanda quickly and comfortably. We help you book domestic routes including Kigali and regional hubs.',
  },
  {
    icon: 'fas fa-globe-africa',
    title: 'International Flights',
    description: 'Flying to Africa, Europe, the Middle East, or beyond? We find the best connecting routes and fares for you.',
  },
  {
    icon: 'fas fa-exchange-alt',
    title: 'One-Way & Return',
    description: 'Whether you need a simple one-way ticket or a flexible return journey, we handle all ticket types.',
  },
  {
    icon: 'fas fa-users',
    title: 'Group & Corporate',
    description: 'Coordinating group travel or business trips? We offer dedicated group booking support with competitive group rates.',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Business Class',
    description: 'We can source business and first-class fares for clients who prioritize comfort and premium service.',
  },
  {
    icon: 'fas fa-compass',
    title: 'Travel Consultation',
    description: 'Not sure about visa requirements, transit times, or layovers? Our team provides complete travel guidance.',
  },
]

const howItWorks = [
  {
    icon: 'fas fa-comment-alt',
    step: '01',
    title: 'Share Your Travel Details',
    description: 'Tell us your departure city, destination, travel dates, number of passengers, and any preferences such as airline or class.',
  },
  {
    icon: 'fas fa-search',
    step: '02',
    title: 'We Search for You',
    description: 'Our team checks available flights from trusted sources and compiles the best options based on your budget and schedule.',
  },
  {
    icon: 'fas fa-check-circle',
    step: '03',
    title: 'We Confirm & Book',
    description: 'Once you approve an option, we handle the full booking process. You receive all details including your ticket confirmation.',
  },
]

const initialForm = {
  name: '', phone: '', email: '',
  from: '', to: '', departDate: '', returnDate: '',
  passengers: '1', tripType: 'return', travelClass: 'economy', message: '',
}

function FlightBooking() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const tripLabel = form.tripType === 'oneway' ? 'One-Way' : 'Return'
    const message = [
      'New flight inquiry from the Fido website',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      '',
      `Trip type: ${tripLabel}`,
      `Departure city: ${form.from}`,
      `Destination: ${form.to}`,
      `Departure date: ${form.departDate}`,
      `Return date: ${form.tripType === 'return' ? form.returnDate || 'Not provided' : 'Not applicable'}`,
      `Passengers: ${form.passengers}`,
      `Travel class: ${form.travelClass}`,
      '',
      'Additional notes or preferences:',
      form.message || 'None',
    ].join('\n')

    try {
      await sendEmailRequest({
        subject: `Flight Inquiry - ${form.name}`,
        requestType: 'Flight Inquiry',
        name: form.name,
        phone: form.phone,
        email: form.email,
        message,
      })
      setSubmitted(true)
    } catch (err) {
      setError(getEmailSendErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flight-page">
      <HeroSection
        size="medium"
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80"
        overlay={0.62}
        badge={{ icon: 'fas fa-plane', text: 'Flight Booking Assistance' }}
        title={<>Book Your Flight <span>With Ease</span></>}
        subtitle="We find the flights. We make the booking. You just show up at the airport. Domestic, international, group, or business — we handle it all."
        buttons={[
          { label: 'Request a Flight', to: '#inquiry', variant: 'btn-primary', icon: 'fas fa-paper-plane' },
          { label: 'WhatsApp Us', href: 'whatsapp', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
      />

      {/* Important Notice */}
      <div className="flight-notice">
        <div className="container flight-notice__inner">
          <div className="flight-notice__icon"><i className="fas fa-info-circle"></i></div>
          <div>
            <strong>How this works:</strong> This is not an online booking engine. Share your flight details with us and our travel specialists will find the best available options and book on your behalf. You pay us directly after confirmation.
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            label="Our Services"
            title="Flight Assistance for Every Type of Traveler"
            subtitle="From a solo trip to a full corporate delegation — we manage all aspects of your flight booking."
            center
          />
          <div className="flight-services__grid">
            {services.map((s, i) => (
              <div key={i} className="flight-service-card">
                <div className="flight-service-card__icon">
                  <i className={s.icon}></i>
                </div>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            label="The Process"
            title="How We Book Your Flights"
            subtitle="Three simple steps — and your flight is sorted."
            center
          />
          <div className="flight-how__grid">
            {howItWorks.map((step, i) => (
              <div key={i} className="flight-how__card">
                <div className="flight-how__step-num">{step.step}</div>
                <div className="flight-how__icon">
                  <i className={step.icon}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {i < howItWorks.length - 1 && <div className="flight-how__arrow"><i className="fas fa-chevron-right"></i></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Us */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="flight-why__grid">
            <div>
              <SectionTitle
                label="Why Book Through Us"
                title="Your Personal Travel Desk in Rwanda"
              />
              <div className="flight-why__items">
                {[
                  { icon: 'fas fa-search-dollar', title: 'Best Fare Guarantee', desc: 'We compare across multiple sources to get you the most competitive fares available.' },
                  { icon: 'fas fa-clock', title: 'Fast Response', desc: 'Submit an inquiry and receive flight options within a few hours — usually same day.' },
                  { icon: 'fas fa-language', title: 'Full Support', desc: 'We handle the booking, send you your e-ticket, and answer any travel questions you have.' },
                  { icon: 'fas fa-lock', title: 'Secure & Reliable', desc: 'Your booking is handled professionally. No need to share card details with unknown platforms.' },
                ].map((item, i) => (
                  <div key={i} className="flight-why__item">
                    <div className="flight-why__icon"><i className={item.icon}></i></div>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flight-why__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=700&q=80"
                alt="Travel assistance"
              />
              <div className="flight-why__image-badge">
                <i className="fas fa-plane"></i>
                <div>
                  <strong>50+ Destinations</strong>
                  <span>Domestic & International</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            label="Flight Inquiry"
            title="Tell Us About Your Trip"
            subtitle="Fill in the details below and our team will find the best flight options for you."
            center
          />

          {submitted ? (
            <div className="flight-form__success">
              <div className="flight-form__success-icon"><i className="fas fa-check-circle"></i></div>
              <h3>Inquiry Received!</h3>
              <p>Your flight request was sent directly to {CONTACT_EMAIL}. Our team will contact you soon.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <i className="fab fa-whatsapp"></i> Chat for Faster Response
                </a>
                <button className="btn btn-outline btn-lg" onClick={() => setSubmitted(false)}>
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form className="flight-form" onSubmit={handleSubmit}>
              {/* Contact Details */}
              <div className="flight-form__section">
                <h4 className="flight-form__section-title">
                  <i className="fas fa-user"></i> Your Details
                </h4>
                <div className="flight-form__row flight-form__row--3">
                  <div className="flight-form__group">
                    <label>Full Name *</label>
                    <div className="flight-form__input">
                      <i className="fas fa-user"></i>
                      <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="flight-form__group">
                    <label>Phone Number *</label>
                    <div className="flight-form__input">
                      <i className="fas fa-phone"></i>
                      <input type="tel" name="phone" placeholder="+250 788 000 000" value={form.phone} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="flight-form__group">
                    <label>Email Address</label>
                    <div className="flight-form__input">
                      <i className="fas fa-envelope"></i>
                      <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Flight Details */}
              <div className="flight-form__section">
                <h4 className="flight-form__section-title">
                  <i className="fas fa-plane"></i> Flight Details
                </h4>
                <div className="flight-form__trip-type">
                  {['oneway', 'return'].map(t => (
                    <label key={t} className={`flight-form__radio ${form.tripType === t ? 'is-selected' : ''}`}>
                      <input type="radio" name="tripType" value={t} checked={form.tripType === t} onChange={handleChange} />
                      {t === 'oneway' ? 'One-Way' : 'Return'}
                    </label>
                  ))}
                </div>
                <div className="flight-form__row">
                  <div className="flight-form__group">
                    <label>Departure City *</label>
                    <div className="flight-form__input">
                      <i className="fas fa-plane-departure"></i>
                      <input type="text" name="from" placeholder="e.g. Kigali (KGL)" value={form.from} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="flight-form__group">
                    <label>Destination *</label>
                    <div className="flight-form__input">
                      <i className="fas fa-plane-arrival"></i>
                      <input type="text" name="to" placeholder="e.g. Nairobi (NBO)" value={form.to} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className="flight-form__row flight-form__row--3">
                  <div className="flight-form__group">
                    <label>Departure Date *</label>
                    <div className="flight-form__input">
                      <i className="fas fa-calendar"></i>
                      <input type="date" name="departDate" value={form.departDate} onChange={handleChange} required />
                    </div>
                  </div>
                  {form.tripType === 'return' && (
                    <div className="flight-form__group">
                      <label>Return Date</label>
                      <div className="flight-form__input">
                        <i className="fas fa-calendar-check"></i>
                        <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} />
                      </div>
                    </div>
                  )}
                  <div className="flight-form__group">
                    <label>Passengers *</label>
                    <div className="flight-form__input">
                      <i className="fas fa-users"></i>
                      <select name="passengers" value={form.passengers} onChange={handleChange} required>
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Passenger' : 'Passengers'}</option>
                        ))}
                        <option value="11+">11+ Passengers</option>
                      </select>
                    </div>
                  </div>
                  <div className="flight-form__group">
                    <label>Travel Class</label>
                    <div className="flight-form__input">
                      <i className="fas fa-chair"></i>
                      <select name="travelClass" value={form.travelClass} onChange={handleChange}>
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flight-form__section">
                <div className="flight-form__group">
                  <label>Additional Notes or Preferences</label>
                  <div className="flight-form__input flight-form__input--textarea">
                    <i className="fas fa-comment"></i>
                    <textarea
                      name="message"
                      placeholder="Preferred airline, luggage needs, special requirements, budget range…"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flight-form__actions">
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                  {loading ? <><i className="fas fa-spinner fa-spin"></i> Sending…</> : <><i className="fas fa-paper-plane"></i> Send Email</>}
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <i className="fab fa-whatsapp"></i> WhatsApp Instead
                </a>
              </div>
              <p className="flight-form__note">
                <i className="fas fa-shield-alt"></i>
                Your details are safe. We never share your information with third parties.
              </p>
              {error && (
                <p className="flight-form__note" role="alert" style={{ color: '#b42318' }}>
                  <i className="fas fa-circle-exclamation"></i>
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      <CTA
        badge={{ icon: 'fas fa-plane', text: 'Ready to Travel?' }}
        title="Your Next Flight is One Message Away"
        subtitle="Contact us via WhatsApp, phone, or the inquiry form above. Our team is available 7 days a week to help you plan your journey."
        buttons={[
          { label: 'Call Us Now', href: 'tel:+250788616618', variant: 'btn-white', icon: 'fas fa-phone' },
          { label: 'Chat on WhatsApp', href: 'whatsapp', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
        variant="dark"
      />
    </div>
  )
}

export default FlightBooking
