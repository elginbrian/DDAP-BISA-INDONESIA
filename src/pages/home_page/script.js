function toggleSections() {
  var sections = document.querySelectorAll(".visi-section, .misi-section, .goals-section");
  var newsSection = document.querySelector(".news-section");
  var bottomHero = document.querySelector(".bottom-hero");

  sections.forEach(function (section) {
    section.classList.toggle("hidden");
    section.classList.toggle("section-animation");
  });

  var button = document.getElementById("toggle-button");
  var isHidden = sections[0].classList.contains("hidden");

  if (!isHidden) {
    newsSection.classList.toggle("hidden-news");
    bottomHero.classList.toggle("hidden-news");
  } else {
    newsSection.classList.toggle("hidden-news");
    bottomHero.classList.toggle("hidden-news");
  }

  button.textContent = isHidden ? "Show More" : "Show Less";
}

document.addEventListener("DOMContentLoaded", function () {
  var newsSection = document.querySelector(".news-section");
  var bottomHero = document.querySelector(".bottom-hero");
  newsSection.classList.toggle("hidden-news");
  bottomHero.classList.toggle("hidden-news");
});

function toggleSections() {
  const button = document.getElementById("toggle-button");
  const visiSection = document.getElementById("visi-section");
  const misiSection = document.getElementById("misi-section");

  if (button.getAttribute("aria-expanded") === "false") {
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Show Less");
    button.textContent = "Show Less";
    visiSection.classList.remove("hidden");
    misiSection.classList.remove("hidden");
  } else {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Show More");
    button.textContent = "Show More";
    visiSection.classList.add("hidden");
    misiSection.classList.add("hidden");
  }
}
