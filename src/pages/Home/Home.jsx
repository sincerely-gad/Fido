import { Link } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/HeroSection'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import CarCard from '../../components/CarCard/CarCard'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import CTA from '../../components/CTA/CTA'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { cars } from '../../data/cars'
import { properties } from '../../data/properties'
import { WHATSAPP_URL } from '../../utils/whatsapp'
import './Home.css'

const services = [
  {
    icon: 'fas fa-car',
    title: 'Car Rentals',
    description: 'Explore Rwanda in style. Choose from our wide fleet of well-maintained cars — from economy sedans to luxury SUVs, with or without a driver.',
    to: '/cars',
    color: '#1565C0',
    features: ['Self-drive & chauffeur options', 'Airport pickup available', 'Flexible daily rates'],
  },
  {
    icon: 'fas fa-plane-departure',
    title: 'Flight Booking',
    description: 'Skip the hassle of searching for flights. Tell us your destination and we handle the booking for you — domestic, international, group, or business.',
    to: '/flights',
    color: '#0c2461',
    features: ['Local & international flights', 'One-way & return tickets', 'Group and corporate travel'],
  },
  {
    icon: 'fas fa-building',
    title: 'Real Estate',
    description: 'Find your perfect home, investment property, or commercial space in Rwanda. We connect you with verified listings across Kigali and beyond.',
    to: '/real-estate',
    color: '#1976D2',
    features: ['Residential & commercial', 'Sales, rentals & land', 'Professional guidance'],
  },
]

const whyUsItems = [
  {
    icon: 'fas fa-shield-alt',
    title: 'Trusted & Verified',
    description: 'All our cars, properties, and travel partners are carefully verified for your peace of mind.',
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 Support',
    description: "Our team is always available — call, email, or WhatsApp us any time you need assistance.",
  },
  {
    icon: 'fas fa-tags',
    title: 'Competitive Pricing',
    description: 'We offer the best rates with no hidden charges. Transparent quotes, every time.',
  },
  {
    icon: 'fas fa-star',
    title: 'Premium Experience',
    description: 'We go beyond the transaction — we care about your entire journey and living experience.',
  },
]

const stats = [
  { number: '2,400+', label: 'Happy Clients' },
  { number: '35+', label: 'Cars Available' },
  { number: '180+', label: 'Properties Listed' },
  { number: '7+', label: 'Years of Service' },
]

const testimonials = [
  {
    name: 'James Rutare',
    role: 'Business Traveler',
    text: 'Fido made my trip to Rwanda seamless. The car was spotless, the driver was professional, and the team responded instantly on WhatsApp. Highly recommend!',
  },
  {
    name: 'Sophie Nkurunziza',
    role: 'Expat — Kigali',
    text: "Found my apartment in Kimihurura through Fido's real estate team. They understood exactly what I needed and arranged viewings within 24 hours.",
  },
  {
    name: 'David Osei',
    role: 'Tour Operator — Ghana',
    text: 'We booked 12 cars and handled group flights through Fido for a corporate retreat. Flawless coordination at a great price.',
  },
]

function Home() {
  const featuredCars = cars.filter(c => c.featured).slice(0, 4)
  const featuredProperties = properties.filter(p => p.featured).slice(0, 4)

  return (
    <div className="home">
      {/* Hero */}
      <HeroSection
        size="full"
        backgroundImage="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
        overlay={0.58}
        badge={{ icon: 'fas fa-car', text: 'Rwanda\'s Trusted Car Rental & General Supply' }}
        title={<>Your Journey. <span>Our</span> Commitment.</>}
        subtitle="Car rentals, flight booking assistance, and real estate — all curated for a seamless Rwanda experience. Trusted by thousands of locals, expats, and travelers."
        buttons={[
          { label: 'Explore Our Services', to: '/cars', variant: 'btn-primary', icon: 'fas fa-compass' },
          { label: 'Chat on WhatsApp', href: 'whatsapp', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
      >
        {/* Quick Stats Strip */}
        <div className="home-hero__stats">
          {stats.map((stat, i) => (
            <div key={i} className="home-hero__stat">
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </HeroSection>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            label="What We Offer"
            title="Three Services. One Trusted Partner."
            subtitle="Whether you're arriving in Rwanda, planning a trip, or looking to invest in property — Fido has you covered."
            center
          />
          <div className="home__services-grid">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="home__why-grid">
            <div className="home__why-left">
              <SectionTitle
                label="Why Fido"
                title="Built Around Your Needs"
                subtitle="We combine local expertise with premium service standards to deliver experiences that simply work. No stress. No surprises."
              />
              <ul className="home__why-items">
                {whyUsItems.map((item, i) => (
                  <li key={i} className="home__why-item">
                    <div className="home__why-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary-dark" style={{ marginTop: 8 }}>
                Learn About Us <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="home__why-right">
              <div className="home__why-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                  alt="Professional team at Fido"
                />
                <div className="home__why-image-card">
                  <i className="fas fa-award"></i>
                  <div>
                    <strong>Top Rated</strong>
                    <span>5★ by 2,000+ clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="home__section-header">
            <SectionTitle
              label="Car Rentals"
              title="Handpicked Vehicles for Every Journey"
              subtitle="From city commutes to safari adventures — find the right car at the right price."
            />
            <Link to="/cars" className="btn btn-outline home__view-all">
              View All Cars <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="home__cards-grid home__cards-grid--4">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Flight Teaser */}
      <section className="home-flight section-padding">
        <div className="home-flight__pattern"></div>
        <div className="container home-flight__inner">
          <div className="home-flight__content">
            <span className="badge badge-white" style={{ marginBottom: 16 }}>
              <i className="fas fa-plane"></i> Flight Booking
            </span>
            <h2>We Book Your Flights.<br />You Just Pack & Go.</h2>
            <p>
              Skip the complexity of flight searches. Share your travel details and our team finds the best available options — domestic or international, one-way or return.
            </p>
            <div className="home-flight__steps">
              {['Share your travel details', 'We find the best options', 'We confirm & book for you'].map((step, i) => (
                <div key={i} className="home-flight__step">
                  <div className="home-flight__step-num">{i + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/flights" className="btn btn-primary btn-lg">
                <i className="fas fa-plane-departure"></i> Our Flight Services
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-lg">
                <i className="fab fa-whatsapp"></i> Request Now
              </a>
            </div>
          </div>
          <div className="home-flight__image">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80"
              alt="Flight booking assistance"
            />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="home__section-header">
            <SectionTitle
              label="Real Estate"
              title="Find Your Perfect Space in Rwanda"
              subtitle="Homes, apartments, commercial spaces, and land — we connect you with the best."
            />
            <Link to="/real-estate" className="btn btn-outline home__view-all">
              View All Properties <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="home__cards-grid home__cards-grid--4">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            label="Testimonials"
            title="What Our Clients Say"
            subtitle="Real stories from travelers, expats, and investors who trust Fido."
            center
          />
          <div className="home__testimonials">
            {testimonials.map((t, i) => (
              <div key={i} className="home__testimonial">
                <div className="home__testimonial-stars">
                  {[...Array(5)].map((_, s) => <i key={s} className="fas fa-star"></i>)}
                </div>
                <p className="home__testimonial-text">"{t.text}"</p>
                <div className="home__testimonial-author">
                  <div className="home__testimonial-avatar" aria-hidden="true">
                    <i className="fas fa-user"></i>
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        badge={{ icon: 'fas fa-rocket', text: 'Get Started Today' }}
        title="Ready to Start Your Rwanda Journey?"
        subtitle="Whether you need a car for tomorrow, a flight next week, or a home this year — our team is ready to help. Contact us or send a quick WhatsApp message."
        buttons={[
          { label: 'Contact Us', to: '/contact', variant: 'btn-primary', icon: 'fas fa-envelope' },
          { label: 'Chat on WhatsApp', href: 'whatsapp', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
        variant="dark"
      />
    </div>
  )
}

export default Home
