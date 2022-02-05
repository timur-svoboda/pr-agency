document.addEventListener("DOMContentLoaded", () => {
  // Burger
  const burger = document.querySelector(".burger-menu");
  
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-menu_cross");

    const lines = Array.from(burger.querySelectorAll(".burger-menu__line"));
    lines.forEach(line => line.classList.toggle("burger-menu__line_cross"))

    document.querySelector(".header__nav").classList.toggle("header__nav_open");
  });
});