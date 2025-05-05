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
        if (data[key]) {
          el.textContent = data[key];
        }
      });
      // Sayfa başlığını da güncelle
      if (data.title) {
        document.title = data.title;
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('language');
  const lang = savedLang || 'tr';
  loadLanguage(lang);
});
