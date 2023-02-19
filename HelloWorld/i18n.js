import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './en/translation.json'
import translationPT from './pt/translation.json'

export const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})