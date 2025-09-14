const menuLink = document.querySelector(".has-dropdown > a");
const dropdown = document.querySelector(".dropdown-menu");
const closeBtn = document.querySelector(".dropdown-menu__close");

menuLink.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("show");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.remove("show");
});
