// Typewriter text
const textArray = ["Software Engineer", "Full-Stack Developer", "Tech Explorer", "CEO D Soft Tech"];
let index = 0, charIndex = 0;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  if (charIndex < textArray[index].length) {
    typedText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typedText.textContent = '';
      charIndex = 0;
      index = (index + 1) % textArray.length;
      typeEffect();
    }, 2000);
  }
}

typeEffect();

// Dark mode toggle


const toggleButton = document.getElementById("menu-toggle");
const dashboard = document.getElementById("mobile-dashboard");
const closeButton = document.getElementById("close-dashboard");

toggleButton.addEventListener("click", () => {
  dashboard.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
  dashboard.classList.remove("open");
});

// Optional: close dashboard if a nav item is clicked
dashboard.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    dashboard.classList.remove("open");
  });
});


const toggleDark = document.getElementById("darkModeToggle");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load from localStorage on refresh
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});


const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000,
  },
});
