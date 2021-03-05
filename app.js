const menuToggle = document.getElementsByClassName("toggle")[0];
const showcase = document.getElementsByClassName("showcase")[0];

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
