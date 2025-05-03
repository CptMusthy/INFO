function setLanguage(lang) {
  localStorage.setItem('language', lang);
  loadLanguage(lang);
}

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = data[key];
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('language');
  const browserLang = navigator.language.startsWith('tr') ? 'tr' : 'en';
  const lang = savedLang || browserLang;
  loadLanguage(lang);
});
