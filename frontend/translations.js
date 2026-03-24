// translations.js - Fix frontend JS errors
function detectLanguage() {
  return localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.querySelector('.btn-lang').textContent = {
    'en': '🌐 EN', 'hi': 'हिं', 'te': 'తె', 'ta': 'தம', 'mr': 'मर', 'bn': 'বাং'
  }[lang] || '🌐 EN';
  
  // Apply [data-i18n] translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const texts = {
      'nav.home': 'Home', 'nav.schemes': 'Schemes', 'nav.login': 'Login'
    };
    if (texts[key]) el.textContent = texts[key];
  });
}

// Export for app.js
window.detectLanguage = detectLanguage;
window.setLang = setLang;
