import { useLocation } from 'react-router-dom'
import HeroSection from '../../components/HeroSection/HeroSection'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ContactForm from '../../components/ContactForm/ContactForm'
import { WHATSAPP_URL } from '../../utils/whatsapp'
import './Contact.css'

const officeMapUrl = 'https://www.google.com/maps/place/1%C2%B059%2703.2%22S+30%C2%B006%2718.4%22E/@-1.984209,30.1025441,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.984209!4d30.105119?hl=en&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D'
const instagramUrl = 'https://www.instagram.com/fidocarrental__?igsh=YWZkZDNuMDNlN3Mw'

const contactInfo = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Our Office',
    lines: ['1°59\'03.2"S 30°06\'18.4"E', 'Kigali, Rwanda'],
    link: officeMapUrl,
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone & WhatsApp',
    lines: ['0788616618'],
    link: 'tel:+250788616618',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email Us',
    lines: ['fidocarrental@gmail.com'],
    link: 'mailto:fidocarrental@gmail.com',
  },
  {
    icon: 'fas fa-clock',
    title: 'Opening Hours',
    lines: ['Mon–Sat: 7:00 AM – 8:00 PM', 'Sunday: 9:00 AM – 5:00 PM'],
    link: null,
  },
]

const faqs = [
  {
    q: 'How do I book a car?',
    a: 'Fill out our booking request form or send us a WhatsApp message with your preferred vehicle, dates, and pickup location. We\'ll confirm availability within 2 hours.',
  },
  {
    q: 'Do I need to pay online?',
    a: 'No. We don\'t process payments online. All payments are made directly to our team — in person, by mobile money (MoMo), or bank transfer after confirmation.',
  },
  {
    q: 'How do you book flights?',
    a: 'Submit a flight inquiry with your route, dates, and passenger count. Our travel specialists will find the best available options and present them to you before booking.',
  },
  {
    q: 'Can I view a property before committing?',
    a: 'Absolutely. We arrange all property viewings at your convenience. Simply inquire and we\'ll schedule a visit with one of our property agents.',
  },
  {
    q: 'How quickly do you respond?',
    a: 'We typically respond within 2 hours during business hours. For urgent requests, WhatsApp is the fastest channel — we\'re very responsive there.',
  },
  {
    q: 'Do you offer airport transfers?',
    a: 'Yes! We offer airport pickup and drop-off with any of our rental vehicles. Let us know your flight details when booking.',
  },
]

function Contact() {
  const location = useLocation()
  const initialData = location.state?.contactForm || {}

  return (
    <div className="contact-page">
      <HeroSection
        size="small"
        gradient="linear-gradient(135deg, #0c1e35 0%, #163356 60%, #1e4a7e 100%)"
        badge={{ icon: 'fas fa-envelope', text: 'Get In Touch' }}
        title={<>We'd Love to <span>Hear from You</span></>}
        subtitle="Whether you have a booking request, property inquiry, or just a question — our team is ready to help."
      />

      {/* Main Contact Section */}
      <section className="section-padding bg-light">
        <div className="container contact-page__grid">
          {/* Form */}
          <div className="contact-page__form-wrap">
            <div className="contact-page__form-card">
              <ContactForm
                type="general"
                title="Send Us a Message"
                subtitle="Fill in the form below and our team will get back to you within a few hours."
                initialData={initialData}
              />
            </div>
          </div>

          {/* Info */}
          <div className="contact-page__info">
            <h3 className="contact-page__info-title">Contact Information</h3>
            <div className="contact-page__info-cards">
              {contactInfo.map((info, i) => (
                <div key={i} className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <i className={info.icon}></i>
                  </div>
                  <div>
                    <h5>{info.title}</h5>
                    {info.lines.map((line, j) => (
                      info.link && j === 0
                        ? <a key={j} href={info.link} className="contact-info-card__line">{line}</a>
                        : <p key={j} className="contact-info-card__line">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Block */}
            <div className="contact-wa-block">
              <div className="contact-wa-block__top">
                <div className="contact-wa-block__icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <strong>Prefer WhatsApp?</strong>
                  <p>Chat directly with our team for the fastest response — available 7 days a week.</p>
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <i className="fab fa-whatsapp"></i>
                Start WhatsApp Chat
              </a>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <h5>Follow Us</h5>
              <div className="contact-socials__links">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-social-btn">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="contact-map">
        <div className="contact-map__overlay">
          <div className="contact-map__pin">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-map__pin-info">
              <strong>Fido Premium Services</strong>
              <span>1°59'03.2"S 30°06'18.4"E, Kigali</span>
            </div>
          </div>
        </div>
        <div className="contact-map__bg"></div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers to the most common questions we receive."
            center
          />
          <div className="contact-faq__grid">
            {faqs.map((faq, i) => (
              <div key={i} className="contact-faq__item">
                <div className="contact-faq__q">
                  <i className="fas fa-question-circle"></i>
                  <h5>{faq.q}</h5>
                </div>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="contact-faq__cta">
            <p>Still have questions?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <i className="fab fa-whatsapp"></i>
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
