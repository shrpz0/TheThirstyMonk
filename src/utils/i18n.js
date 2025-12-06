import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enDrinks from "./i18nData/enDrinks.json"
import frDrinks from "./i18nData/frDrinks.json"

// colors
// gold: #e89c30,
// white: #f0ece5 
// grey: #a89c8a
// black: #181312 
// brown : #241d1a
// svg-bg: #38291d
const resources = {
  en: {
    translation: {
      navHome: "Home",
      navAbout: "About",
      navFind: "Find Us",
      navHours: "Working Hours",
      heroParagraph: "A taste of Ireland, right in the heart of Toulouse",
      heroDiscoverMenu: "Discover the Menu",
      aboutUs: "Us",
      aboutParagraph: "The Thirsty Monk is an Irish pub right on Jean Jaurès — loud enough to be alive, chill enough to feel like home. Our staff speaks French and English, the crowd is a mix of locals, students, expats, and the occasional legend stumbling in.",
      aboutParagraph2: "Fridays are for live music — bands, solo artists, acoustic sets, whatever brings noise and soul into the room. Mondays flip the vibe with our bilingual pub quizzes. Some come to win, some come to drink, some come to embarrass themselves in two languages. It’s all part of the charm.",
      aboutDrinks: "Drinks That Don’t Flinch",
      aboutDrinksP: "Over 50 spirits and shots on deck",
      aboutAtm: "Good Vibes Guaranteed",
      aboutAtmP: "Lively Fridays, and themed nights that always deliver",
      aboutExp: "A Pub That Feels Alive",
      aboutExpP: "That Irish warmth that keeps you staying longer",
      opening: "Opening",
      hours: "Hours",
      everyday: "Everyday",
      our: "Our",
      menu: "Menu",
      beer: "Beers",
      spiritsT: "Spirits",
      contact: "Contact",
      us: "Us",
      follow: "Follow",
      phone: "Phone",
      adress: "Adress",
      find: "Find",
      metro: "Metro:",
      findUsMetroLines: "(Lines A and B)",
      walkTime: "2 Minutes on foot",
      stayCo: "Stay connected for our special events",
      quickLinks: "Quick Links",
      seeMore: "See more",
      hide: "Hide",
      ...enDrinks
    }
  },
  fr: {
    translation: {
      navHome: "Acceuil",
      navAbout: "À propos",
      navFind: "Nous trouver",
      heroParagraph: "Un goût d’Irlande, au cœur de Toulouse",
      heroDiscoverMenu: "Découvrir le Menu",
      aboutUs: "De Nous",
      aboutParagraph: "Le Thirsty Monk est un pub irlandais posé sur Jean Jaurès — assez bruyant pour être vivant, assez cosy pour que tu t’y sentes chez toi. L’équipe parle français et anglais, et l’ambiance mélange locaux, étudiants, expats et quelques légendes qui passent par là.",
      aboutParagraph2: "Le vendredi, c’est live music. Groupes, artistes solo, acoustique... Le lundi, les quizzes bilingues. Certains viennent pour gagner, d’autres pour boire, et une bonne partie vient juste pour se ridiculiser dans deux langues. C’est ça qui fait le charme.",
      aboutDrinks: "Bières Craft",
      aboutDrinksP: "Plus de 10 tirages, bouteilles du monde",
      aboutAtm: "Ambiance Assurée",
      aboutAtmP: "Vendredis animés et soirées à thème bien chargées.",
      aboutExp: "Un Pub Qui Vit",
      aboutExpP: "Une chaleur irlandaise qui retient tout le monde.",
      opening: "Horaires",
      hours: "d'Ouverture",
      everyday: "Tous les jours",
      our: "Notre",
      menu: "Carte",
      beer: "Bières",
      spiritsT: "Spiritueux",
      contact: "Contactez",
      us: "Nous",
      follow: "Suivez",
      navHours: "Horaires",
      phone: "Téléphone",
      adress: "Adresse",
      find: "Trouvez",
      walkTime: "2 Minutes à pied",
      metro: "Métro:",
      findUsMetroLines: "(Lignes A and B)",
      stayCo: "Restez connectés pour nos événements spéciaux",
      quickLinks: "Liens Rapides",
      seeMore: "Voir plus",
      hide: "Cacher",
      ...frDrinks,
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: "fr",
    lng: "en", 

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;