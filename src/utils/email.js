import emailjs from '@emailjs/browser'

export const CONTACT_EMAIL = 'fidocarrental@gmail.com'

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

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
      request_subject: subject,
      request_type: requestType,
      from_name: name,
      from_phone: phone,
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
