function toggleSections() {
  var sections = document.querySelectorAll(".visi-section, .misi-section, .goals-section");

  sections.forEach(function (section) {
    section.classList.toggle("hidden");
    section.classList.toggle("section-animation");
  });

  var button = document.getElementById("toggle-button");
  var isHidden = sections[0].classList.contains("hidden");
  button.textContent = isHidden ? "Show More" : "Show Less";
}
