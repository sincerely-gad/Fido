import HeroSection from '../../components/HeroSection/HeroSection'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CTA from '../../components/CTA/CTA'
import './About.css'

const stats = [
  { number: '2,400+', label: 'Happy Clients', icon: 'fas fa-smile' },
  { number: '35+', label: 'Vehicles in Fleet', icon: 'fas fa-car' },
  { number: '180+', label: 'Properties Listed', icon: 'fas fa-building' },
  { number: '7+', label: 'Years of Experience', icon: 'fas fa-calendar-alt' },
]

const values = [
  {
    icon: 'fas fa-gem',
    title: 'Excellence',
    description: 'We set high standards for every service we offer and never compromise on quality.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Integrity',
    description: 'Transparent pricing, honest advice, and trustworthy service — every time.',
  },
  {
    icon: 'fas fa-heart',
    title: 'Care',
    description: "We genuinely care about our clients' experience — from first contact to final delivery.",
  },
  {
    icon: 'fas fa-bolt',
    title: 'Speed',
    description: 'We respond quickly and work efficiently so your plans never get delayed.',
  },
]

const team = [
  {
    name: 'Jean-Pierre Habimana',
    role: 'CEO & Co-Founder',
    image: 'https://i.pravatar.cc/300?img=52',
    bio: 'With 10+ years in the travel and hospitality industry, Jean-Pierre founded Fido to bring premium travel services to every Rwandan.',
  },
  {
    name: 'Amelia Uwamahoro',
    role: 'Head of Real Estate',
    image: 'https://i.pravatar.cc/300?img=47',
    bio: 'A certified property consultant with deep knowledge of Kigali\'s real estate market and investment landscape.',
  },
  {
    name: 'Eric Nshimiyimana',
    role: 'Fleet Manager',
    image: 'https://i.pravatar.cc/300?img=33',
    bio: 'Eric ensures every vehicle in our fleet is immaculate, insured, and ready for any journey — from city drives to cross-country safaris.',
  },
  {
    name: 'Grace Mutoni',
    role: 'Travel & Flights Specialist',
    image: 'https://i.pravatar.cc/300?img=44',
    bio: 'Grace has booked thousands of flights for clients across the region, always finding the best routes and fares.',
  },
]

function About() {
  return (
    <div className="about">
      <HeroSection
        size="medium"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
        overlay={0.65}
        badge={{ icon: 'fas fa-info-circle', text: 'About Fido' }}
        title={<>More Than a Service.<br /><span>We're Your Partner.</span></>}
        subtitle="Fido was built on a simple belief: travel and lifestyle services in Rwanda should be accessible, transparent, and genuinely excellent."
        buttons={[
          { label: 'Our Services', to: '/', variant: 'btn-primary', icon: 'fas fa-compass' },
          { label: 'Contact Us', to: '/contact', variant: 'btn-outline-white', icon: 'fas fa-envelope' },
        ]}
      />

      {/* Stats */}
      <div className="about-stats">
        <div className="container about-stats__grid">
          {stats.map((stat, i) => (
            <div key={i} className="about-stat">
              <div className="about-stat__icon"><i className={stat.icon}></i></div>
              <div className="about-stat__number">{stat.number}</div>
              <div className="about-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
                alt="Fido team collaboration"
              />
              <div className="about-story__image-accent"></div>
            </div>
            <div className="about-story__content">
              <SectionTitle
                label="Our Story"
                title="Born in Rwanda, Built for You"
              />
              <div className="about-story__text">
                <p>
                  Fido was founded in Kigali with a clear vision: to create a single, trustworthy destination where travelers, expats, diaspora, and local clients could access premium car rentals, flight booking support, and real estate services — without the usual complications.
                </p>
                <p>
                  What started as a small car rental operation quickly grew into a full-service travel and lifestyle brand. We heard from our clients that booking flights was stressful, finding good properties was time-consuming, and getting reliable transportation was unpredictable.
                </p>
                <p>
                  So we built something better. Today, Fido is Rwanda's premier one-stop solution — combining the warmth of local expertise with the standards of international service.
                </p>
              </div>
              <div className="about-story__highlights">
                {[
                  { icon: 'fas fa-map-marker-alt', text: 'Headquartered in Kigali, Rwanda' },
                  { icon: 'fas fa-globe', text: 'Serving local & international clients' },
                  { icon: 'fas fa-certificate', text: 'Registered & fully insured business' },
                ].map((h, i) => (
                  <div key={i} className="about-story__highlight">
                    <i className={h.icon}></i>
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionTitle label="What Drives Us" title="Mission & Vision" center />
          <div className="about-mv__grid">
            <div className="about-mv__card about-mv__card--mission">
              <div className="about-mv__card-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>
                To deliver accessible, reliable, and premium travel and lifestyle services across Rwanda — making every client's journey, relocation, or property investment as smooth and enjoyable as possible.
              </p>
              <div className="about-mv__card-deco"></div>
            </div>
            <div className="about-mv__card about-mv__card--vision">
              <div className="about-mv__card-icon"><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>
                To become East Africa's most trusted integrated travel and real estate brand — a company that clients recommend without hesitation and professionals are proud to be part of.
              </p>
              <div className="about-mv__card-deco"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle label="Our Values" title="The Principles We Live By" center />
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div key={i} className="about-value">
                <div className="about-value__icon"><i className={v.icon}></i></div>
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-light">
        <div className="container">
          <SectionTitle
            label="Our Team"
            title="The People Behind Fido"
            subtitle="Our team brings together expertise in travel, hospitality, property, and client service — all united by a passion for Rwanda."
            center
          />
          <div className="about-team__grid">
            {team.map((member, i) => (
              <div key={i} className="about-team-card">
                <div className="about-team-card__image-wrap">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="about-team-card__body">
                  <h4>{member.name}</h4>
                  <span className="about-team-card__role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
                <div className="about-team-card__socials">
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        badge={{ icon: 'fas fa-handshake', text: 'Work With Us' }}
        title="Let's Start Something Together"
        subtitle="Whether you need a car, a flight, or a property — Fido's team is ready to deliver with expertise and care."
        buttons={[
          { label: 'Contact Our Team', to: '/contact', variant: 'btn-primary', icon: 'fas fa-envelope' },
          { label: 'Chat on WhatsApp', href: 'https://wa.me/250788616618', variant: 'btn-whatsapp', icon: 'fab fa-whatsapp' },
        ]}
        variant="dark"
      />
    </div>
  )
}

export default About
