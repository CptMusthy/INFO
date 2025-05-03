// Dil değiştirme işlevi: seçili dili kaydeder ve yükler
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  loadLanguage(lang);
}

// Dil dosyasını yükleyip sayfadaki metinleri güncelleyen işlev
function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Dil dosyası yüklenemedi: lang/${lang}.json`);
      }
      return res.json();
    })
    .then(data => {
      // data-key içeren tüm elemanların içeriğini güncelle
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (data[key]) {
          el.textContent = data[key];
        }
      });
      // Sayfanın <title> etiketini de güncelle
      if (data.title) {
        document.title = data.title;
      }
    })
    .catch(err => {
      console.error("Dil yükleme hatası:", err);
    });
}

// Sayfa ilk yüklendiğinde, kaydedilmiş dil varsa onu, yoksa Türkçeyi kullan
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('language');
  const lang = savedLang || 'tr';
  loadLanguage(lang);
});
