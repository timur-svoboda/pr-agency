document.addEventListener("DOMContentLoaded", () => {
  // Lazyload
  new LazyLoad({});

  // Burger
  const burger = document.querySelector(".burger-menu");
  
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger-menu_cross");

    const lines = Array.from(burger.querySelectorAll(".burger-menu__line"));
    lines.forEach(line => line.classList.toggle("burger-menu__line_cross"))

    document.querySelector(".header__nav").classList.toggle("header__nav_open");
  });

  // Swiper
  new Swiper(".v-slider__slider", {
    direction: "horizontal",
    allowTouchMove: false,
    // autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: "v-slider__button_disabled",
    },
    breakpoints: {
      576: {
        direction: "vertical",
      }
    },
    on: {
      init: setSliderMaxHeight,
      resize: setSliderMaxHeight
    }
  });

  function setSliderMaxHeight(slider) {
    const children = slider.slides.map(slide => Array.from(slide.children));
    const heights = children.map(child => child.reduce((prev, cur) => prev + cur.offsetHeight, 0));
    const maxHeight = Math.max(...heights);
    slider.el.style.height = maxHeight + "px";
    slider.update();
  }
});