if (localStorage.getItem("theme") == "stroked") {
  setTheme("stroked");
} else {
  setTheme("filled");
}

function toggleTheme() {
  if (localStorage.getItem("theme") == "stroked") {
    setTheme("filled");
  } else {
    setTheme("stroked");
  }
  console.log(swiper.activeIndex);
}

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.body.className = themeName;
}

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.on("slideChange", function () {
//   console.log(swiper.activeIndex);
});
window.addEventListener("load", () => {
  animateFirst();

  animateSecond();

  animateThird();

  animateFourth();

  animateFifth();

  animateSixth();

  animateSeventh()
});
