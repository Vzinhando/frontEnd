import React, { useEffect } from 'react';
import './TradutorIdiomas.css';

const TradutorIdiomas = () => {
  const languages = [
    { code: 'pt', name: 'Português', flag: "/img/IconTraducao/bandeiraBrasil.svg" },
    { code: 'en', name: 'English', flag: "/img/IconTraducao/bandeiraEstadosUnidos.svg" },
    { code: 'es', name: 'Español', flag: "/img/IconTraducao/bandeiraEspanhol.svg" },
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
            <img src={lang.flag} alt={lang.name} className="iconeBandeira" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TradutorIdiomas;
