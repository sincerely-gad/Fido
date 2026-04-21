import emailjs from '@emailjs/browser'

export const CONTACT_EMAIL = 'fidocarrental@gmail.com'

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const EMAIL_SEND_ERROR_MESSAGE = `We could not send this form right now. Please contact us directly at ${CONTACT_EMAIL} or use WhatsApp for the fastest response.`

export function assertEmailJsConfig() {
  const missingKeys = Object.entries(emailJsConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key)

  if (missingKeys.length > 0) {
    throw new Error(`Missing EmailJS configuration: ${missingKeys.join(', ')}`)
  }
}

export async function sendEmailRequest({
  subject,
  requestType,
  name,
  phone,
  email,
  message,
}) {
  assertEmailJsConfig()

  return emailjs.send(
    emailJsConfig.serviceId,
    emailJsConfig.templateId,
    {
      to_email: CONTACT_EMAIL,
      subject,
      request_subject: subject,
      request_type: requestType,
      service: requestType,
      name,
      full_name: name,
      from_name: name,
      phone,
      phone_number: phone,
      from_phone: phone,
      email: email || 'Not provided',
      from_email: email || 'Not provided',
      reply_to: email || CONTACT_EMAIL,
      message,
      submitted_at: new Date().toLocaleString(),
    },
    {
      publicKey: emailJsConfig.publicKey,
    },
  )
}

export function getEmailSendErrorMessage(error) {
  const details = `${error?.text || ''} ${error?.message || ''}`.toLowerCase()

  if (
    details.includes('service id') ||
    details.includes('template id') ||
    details.includes('public key') ||
    details.includes('user id') ||
    details.includes('not found') ||
    details.includes('emailjs configuration')
  ) {
    return EMAIL_SEND_ERROR_MESSAGE
  }

  return error?.text || error?.message || EMAIL_SEND_ERROR_MESSAGE
}
