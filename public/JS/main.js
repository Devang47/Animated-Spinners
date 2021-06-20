// default theme (filled)
if (localStorage.getItem("theme") == "stroked") {
  setTheme("stroked");
} else {
  setTheme("filled");
}

// toggle theme function
function toggleTheme() {
  if (localStorage.getItem("theme") == "stroked") {
    setTheme("filled");
  } else {
    setTheme("stroked");
  }
  addContent();
}

// theme setter func.
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.body.className = themeName;
}

// swiper init
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.on("slideChange", addContent());

// first animation starts onload of window
// it is a known bug and needs to be fixed
window.addEventListener("load", () => {
  animateZero();
  animateFirst();
  animateSecond();
  animateThird();
  animateFourth();
  animateFifth();
  animateSixth();
});

let visitBtn = document.querySelector("#getSource-btn");
visitBtn.addEventListener("click", () => {
  sourceBtnEvent();
});
// animation of Source-Code box
const sourceBtnEvent = () => {
  // alertify.message("Normal message");
  addContent();
  if (
    document.querySelector(".source-box-shadow").style.display == "" ||
    document.querySelector(".source-box-shadow").style.display == "none"
  ) {
    anime({
      targets: ".source-view-box",
      opacity: [0, 1],
      duration: 200,
      easing: "easeInOutSine",
      top: ["40%", "50%"],
      begin: () => {
        document.querySelector(".source-view-box").style.display = "grid";
        document.querySelector(".source-box-shadow").style.display = "block";
        anime({
          targets: ".source-box-shadow",
          opacity: [0, 1],
          duration: 200,
          easing: "easeInOutSine",
        });
      },
    });

    anime({
      targets: ".animatedTip",
      right: ["0%", "5%"],
      opacity: [0, 1],
      delay: 1000,
      duration: 100,
      easing: "easeInOutSine",
      begin: () => {
        document.querySelector(".animatedTip").style.display = "block";
      },
    });
    anime({
      targets: ".animatedTip",
      right: ["5%", "3%"],
      opacity: [1, 0],
      delay: 6100,
      easing: "easeInOutSine",
      duration: 100,
      complete: () => {
        document.querySelector(".animatedTip").style.display = "none";
      },
    });
  } else {
    anime({
      targets: ".source-view-box",
      opacity: [1, 0],
      duration: 200,
      easing: "easeInOutSine",
      top: ["50%", "40%"],
      begin: () => {
        anime({
          targets: ".source-box-shadow",
          opacity: [1, 0],
          duration: 200,
          easing: "easeInOutSine",
        });
      },
      complete: () => {
        document.querySelector(".source-view-box").style.display = "none";
        document.querySelector(".source-box-shadow").style.display = "none";
      },
    });
  }
};
