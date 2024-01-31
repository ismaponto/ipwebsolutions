import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '/flags/gb-nir.png' },
    { code: 'es', name: 'Español', flag: '/flags/ar.png' },
    { code: 'fr', name: 'Français', flag: '/flags/fr.png' },
    { code: 'it', name: 'Italiano', flag: '/flags/it.png' },
  ];

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeLanguage(lang.code)}
          className="language-button"
        >
          <img src={lang.flag} alt={lang.name} style={{ width: '30px', height: '20px' }} />
          {lang.name}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSelector;
  


// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();

//   console.log(i18n); // Agrega este log para verificar la estructura de i18n

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//     <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => changeLanguage('en')} mr={2}>
//       <img src="/flags/gb-nir.png" alt="English" style={{ width: '30px', height: '20px' }} />
//     </motion.button>
//     <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => changeLanguage('es')} mr={2}>
//       <img src="/flags/ar.png" alt="Español" style={{ width: '30px', height: '20px' }} />
//     </motion.button>
//     <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => changeLanguage('fr')}>
//       <img src="/flags/fr.png" alt="Français" style={{ width: '30px', height: '20px' }} />
//     </motion.button>
//   </div>
//   );
// };

// export default LanguageSelector;