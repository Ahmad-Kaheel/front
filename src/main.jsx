import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import arNav1Translation from './locales/ar/home/nav1.json';
import arNav2Translation from './locales/ar/home/nav2.json';
import enNav1Translation from './locales/en/home/nav1.json';
import enNav2Translation from './locales/en/home/nav2.json';
import arMobileNav from "./locales/ar/home/mobileNav.json"
import enMobileNav from "./locales/en/home/mobileNav.json"
import arDiscover from "./locales/ar/home/discover.json"
import enDiscover from "./locales/en/home/discover.json"
import arOther from "./locales/ar/home/otherFilter.json"
import enOther from "./locales/en/home/otherFilter.json"
import arCountry from "./locales/ar/home/country.json"
import enCountry from "./locales/en/home/country.json"
import arAnimals from "./locales/ar/home/animals.json"
import enAnimals from "./locales/en/home/animals.json"
import arDiscount from "./locales/ar/home/discount.json"
import enDiscount from "./locales/en/home/discount.json"
import arPerson from './locales/ar/home/person.json'
import enPerson from './locales/en/home/person.json'
import arGroup from './locales/ar/home/group.json'
import enGroup from './locales/en/home/group.json'
import arChoice from './locales/ar/home/cheifChoices.json'
import enChoice from './locales/en/home/cheifChoices.json'
import arFooter from "./locales/ar/footer.json"
import enFooter from "./locales/en/footer.json"
import arReview from "./locales/ar/home/review.json"
import enReview from "./locales/en/home/review.json"
import arPartners from "./locales/ar/home/partners.json" 
import enPartners from "./locales/en/home/partners.json" 
import arBasket from "./locales/ar/basket.json"
import enBasket from "./locales/en/basket.json"
import arDiscoverDrawer from "./locales/ar/Discover.json"
import enDiscoverDrawer from "./locales/en/Discover.json"
import arDrop from "./locales/ar/drop.json"
import enDrop from "./locales/en/drop.json"
import arLogin from "./locales/ar/auth/login.json"
import enLogin from "./locales/en/auth/login.json"
import arRegisterC from "./locales/ar/auth/registerC.json"
import enRegisterC from "./locales/en/auth/registerC.json"
import arRegisterB from "./locales/ar/auth/registerB.json"
import enRegisterB from "./locales/en/auth/registerB.json"
import arProducts from "./locales/ar/Products.json"
import enProducts from "./locales/en/Products.json"
import arProduct from "./locales/ar/Product.json"
import enProduct from "./locales/en/Product.json"
import arProfile from "./locales/ar/auth/profile.json"
import enProfile from "./locales/en/auth/profile.json"
import enProfileData from "./locales/en/auth/profileData.json"
import arProfileData from "./locales/ar/auth/profileData.json"
import  arOrder from "./locales/ar/auth/order.json"
import  enOrder from "./locales/en/auth/order.json"
import arPayment from "./locales/ar/payment.json"
import enPayment from "./locales/en/payment.json"
import arWelcome from "./locales/ar/welcome.json"
import enWelcome from "./locales/en/welcome.json"
import arCheckout from "./locales/ar/checkout.json"
import enCheckout from "./locales/en/checkout.json"

import Store from './state/Store';
import { Provider } from 'react-redux';
const savedLanguage = localStorage.getItem('language') || 'ar';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        nav1: arNav1Translation,
        nav2: arNav2Translation,
        mobileNav: arMobileNav,
        discover: arDiscover,
        other: arOther,
        country: arCountry,
        animals: arAnimals,
        discount: arDiscount,
        person: arPerson,
        group: arGroup,
        choices: arChoice,
        footer: arFooter,
        review: arReview,
        partners: arPartners,
        basket: arBasket,
        discoverDrawer: arDiscoverDrawer,
        drop: arDrop,
        login: arLogin,
        registerC: arRegisterC,
        registerB: arRegisterB,
        products: arProducts,
        product: arProduct,
        profile: arProfile,
        profileData: arProfileData,
        order: arOrder,
        payment: arPayment,
        welcome: arWelcome,
        checkout: arCheckout,
      },
      en: {
        nav1: enNav1Translation,
        nav2: enNav2Translation,
        mobileNav: enMobileNav,
        discover: enDiscover,
        other: enOther,
        country: enCountry,
        animals: enAnimals,
        discount: enDiscount,
        person: enPerson,
        group: enGroup,
        choices: enChoice,
        footer: enFooter,
        review: enReview,
        partners: enPartners,
        basket: enBasket,
        discoverDrawer: enDiscoverDrawer,
        drop: enDrop,
        login: enLogin,
        registerC: enRegisterC,
        registerB: enRegisterB,
        products: enProducts,
        product: enProduct,
        profile: enProfile,
        profileData: enProfileData,
        order: enOrder,
        payment: enPayment,
        welcome: enWelcome,
        checkout: enCheckout,
      },
    },
    fallbackLng: 'ar',
    lng: savedLanguage, // تعيين اللغة المحفوظة أو الافتراضية
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
    </Provider>
)
