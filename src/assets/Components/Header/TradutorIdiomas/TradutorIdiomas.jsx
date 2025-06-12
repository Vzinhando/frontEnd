// src/components/TradutorIdiomas.js

import React, { useEffect } from 'react';
import './TradutorIdiomas.css'; // Corrigido o nome do arquivo CSS

const TradutorIdiomas = () => {
  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const handleLanguageChange = (langCode) => {
    const googleTranslateSelect = document.querySelector('#googleTranslateElement select');
    if (googleTranslateSelect) {
      googleTranslateSelect.value = langCode;
      googleTranslateSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'pt' },
        'googleTranslateElement' 
      );
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div id="googleTranslateElement" style={{ display: 'none' }}></div>
      <div className="containerTradutorIdiomas">
        {languages.map(lang => (
          <button
            key={lang.code}
            className="iconBotaoTradutor"
            title={lang.name}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.flag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TradutorIdiomas;