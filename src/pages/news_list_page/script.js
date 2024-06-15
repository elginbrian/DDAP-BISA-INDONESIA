document.querySelectorAll(".btn-check").forEach((input) => {
  input.addEventListener("change", function () {
    document.querySelectorAll(".custom-btn").forEach((label) => {
      label.classList.remove("active");
    });
    this.nextElementSibling.classList.add("active");
  });
});
