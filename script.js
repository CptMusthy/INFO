// Dil değiştirme işlevi
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  loadLanguage(lang);
}

// Dil dosyasını yükleme işlevi
function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      // Sayfadaki tüm öğelerin metinlerini güncelle
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (data[key]) {
          el.textContent = data[key];
        }
      });
    });
}

// Sayfa yüklendiğinde dilin kontrol edilmesi ve yüklenmesi
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('language');
  const lang = savedLang || 'tr'; // Varsayılan dil Türkçe
  loadLanguage(lang);
});
