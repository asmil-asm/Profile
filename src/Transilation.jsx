import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './Translate/locales/english.json'
import Arabic from './Translate/locales/arabic.json'
import Italian from './Translate/locales/italian.json'
import Spanish from './Translate/locales/spanish.json'
import German from './Translate/locales/german.json'



i18n
  .use(initReactI18next) 
   .init({
 resources:{
en:{translation:English},
ar:{translation:Arabic},
it:{translation:Italian},
es:{translation:Spanish},
de:{translation:German}
 },    
 lng:"en",
 fallbackLng: 'en',     
    interpolation: {
      escapeValue: false, 
       },
    

  
  });

export default i18n;