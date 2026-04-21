import { useEffect, useState } from 'react'
import './ContactForm.css'
import { CONTACT_EMAIL, getEmailSendErrorMessage, sendEmailRequest } from '../../utils/email'

const subjectLabels = {
  car: 'Car Rental Inquiry',
  flight: 'Flight Booking',
  realestate: 'Real Estate',
  other: 'General Message',
}

function ContactForm({ type = 'general', title, subtitle, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: initialData.subject || '',
    message: initialData.message || '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      subject: initialData.subject || prev.subject,
      message: initialData.message || prev.message,
    }))
  }, [initialData.subject, initialData.message])

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const subjectLabel = subjectLabels[formData.subject] || formData.subject || 'Website Message'
    const message = [
      'New request from the Fido website',
      '',
      `Request type: ${subjectLabel}`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || 'Not provided'}`,
      '',
      'Message:',
      formData.message,
    ].join('\n')

    try {
      await sendEmailRequest({
        subject: `${subjectLabel} - ${formData.name}`,
        requestType: subjectLabel,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message,
      })
      setSubmitted(true)
    } catch (err) {
      setError(getEmailSendErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h3>Message Received!</h3>
        <p>Your request was sent directly to {CONTACT_EMAIL}. Our team will contact you soon.</p>
        <a
          href="https://wa.me/250788616618"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <i className="fab fa-whatsapp"></i>
          Need faster response? Chat on WhatsApp
        </a>
        <button className="btn btn-outline" onClick={() => setSubmitted(false)} style={{ marginTop: 12 }}>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="contact-form">
      {title && <h3 className="contact-form__title">{title}</h3>}
      {subtitle && <p className="contact-form__subtitle">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="contact-form__form">
        <div className="contact-form__row">
          <div className="contact-form__group">
            <label htmlFor="name">Full Name *</label>
            <div className="contact-form__input-wrap">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact-form__group">
            <label htmlFor="phone">Phone Number *</label>
            <div className="contact-form__input-wrap">
              <i className="fas fa-phone"></i>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+250 788 000 000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="contact-form__group">
          <label htmlFor="email">Email Address</label>
          <div className="contact-form__input-wrap">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {type === 'general' && (
          <div className="contact-form__group">
            <label htmlFor="subject">Subject *</label>
            <div className="contact-form__input-wrap">
              <i className="fas fa-tag"></i>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="">Select a service</option>
                <option value="car">Car Rental Inquiry</option>
                <option value="flight">Flight Booking</option>
                <option value="realestate">Real Estate</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        <div className="contact-form__group">
          <label htmlFor="message">Message *</label>
          <div className="contact-form__input-wrap contact-form__input-wrap--textarea">
            <i className="fas fa-comment"></i>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us what you need — we'll get back to you quickly."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-form__actions">
          <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
            {loading ? (
              <><i className="fas fa-spinner fa-spin"></i> Sending…</>
            ) : (
              <><i className="fas fa-paper-plane"></i> Send Email</>
            )}
          </button>
          <a
            href="https://wa.me/250788616618"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp Instead
          </a>
        </div>

        {error && (
          <p className="contact-form__note" role="alert" style={{ color: '#b42318' }}>
            <i className="fas fa-circle-exclamation"></i>
            {error}
          </p>
        )}

        <p className="contact-form__note">
          <i className="fas fa-shield-alt"></i>
          Your information is private and will never be shared.
        </p>
      </form>
    </div>
  )
}

export default ContactForm
