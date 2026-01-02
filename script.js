let currentLang = "fr";

const toggleButton = document.getElementById("langToggle");
const translatableElements = document.querySelectorAll("[data-fr]");

toggleButton.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  toggleButton.textContent = currentLang === "fr" ? "EN" : "FR";

  translatableElements.forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});
