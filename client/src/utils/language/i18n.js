import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import { translations } from 'utils'


const fallbackLng = ['en']


const { enAuth, enError } = translations
const { ruAuth, ruError } = translations

const languages = {
    en: { 
      ...enAuth, 
      ...enError
    }, 
    ru: { 
      ...ruAuth,  
      ...ruError
    }
}
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: languages,
    fallbackLng,
    debug: false,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },

    // have a common namespace used around the full app
    // ns: ["auth", 'errors'],
    // defaultNS: "forgot",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
