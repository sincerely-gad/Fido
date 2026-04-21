export const WHATSAPP_PHONE = '250788616618'

const defaultMessage = 'Hello Fido team, I would like to make an inquiry.'

export function getWhatsAppUrl(message = defaultMessage) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = getWhatsAppUrl()
