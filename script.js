function setLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = data[key];
      });
    });
}
