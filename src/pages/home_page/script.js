function toggleSections() {
  var sections = document.querySelectorAll(".visi-section, .misi-section, .goals-section");
  var newsSection = document.querySelector(".news-section");

  sections.forEach(function (section) {
    section.classList.toggle("hidden");
    section.classList.toggle("section-animation");
  });

  var button = document.getElementById("toggle-button");
  var isHidden = sections[0].classList.contains("hidden");

  if (!isHidden) {
    newsSection.classList.toggle("hidden-news");
  } else if (isHidden) {
    newsSection.classList.toggle("hidden-news");
  }
  button.textContent = isHidden ? "Show More" : "Show Less";
}

document.addEventListener("DOMContentLoaded", function () {
  var newsSection = document.querySelector(".news-section");
  newsSection.classList.toggle("hidden-news");
});
