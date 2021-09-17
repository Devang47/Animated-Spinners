"use strict";

let triggerState = false;
const NavbarOpen = () => {
  let preNav = document.querySelector(".Navbar-preScreen");
  let HiddenNav = document.querySelector(".fullHiddenNavbar");
  console.log('here');
  if (HiddenNav.style.height == "0vh" && !triggerState) {
    triggerState = "middle";

    anime({
      targets: [preNav, HiddenNav],
      height: "100vh",
      easing: "easeOutCubic",
      duration: 400,
      delay: anime.stagger(200),
      complete: () => {
        animateItems("open");
      },
    });

    // trigger lines
    anime({
      targets: ".triggerLine1",
      rotate: 45,
      translateY: 7.4,
      duration: 1800,
    });
    anime({
      targets: ".triggerLine3",
      rotate: -45,
      translateY: -7.4,
      duration: 1800,
    });
    anime({
      targets: ".triggerLine2",
      rotate: 45,
      opacity: 0,
      duration: 1800,
    });
  } else if (HiddenNav.style.height == "100vh" && triggerState === true) {
    triggerState = "middle";
    animateItems("close");
    anime({
      targets: [HiddenNav, preNav],
      height: "0vh",
      easing: "easeOutCubic",
      duration: 400,
      delay: anime.stagger(200),
    });

    // trigger lines
    anime({
      targets: ".triggerLine1",
      rotate: 0,
      translateY: 0,
      duration: 1800,
    });
    anime({
      targets: ".triggerLine3",
      rotate: 0,
      translateY: 0,
      duration: 1800,
    });
    anime({
      targets: ".triggerLine2",
      rotate: 0,
      opacity: 1,
      duration: 1800,
    });
  }
};

function animateItems(res) {
  if (res === "open") {
    let openingTl = anime.timeline({
      easing: "easeOutCubic",
      complete: () => {
        triggerState = true;
      },
    });
    openingTl
      .add({
        targets: ".fullname",
        translateY: [-30, 0],
        opacity: 1,
        duration: 500,
      })
      .add({
        targets: ".FullNameline",
        width: "120px",
        opacity: 1,
        duration: 300,
      })
      .add({
        targets: ".Nav-links",
        translateY: [-10, 0],
        opacity: 1,
        duration: 400,
        delay: anime.stagger(100),
      })
      .add({
        targets: ".social-links",
        opacity: 1,
        translateY: [-10, 0],
        duration: 200,
      });
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else if (res === "close") {
    anime({
      targets: [".Nav-links", ".fullname", ".social-links", ".FullNameline"],
      opacity: 0,
      easing: "easeOutCubic",
      duration: 30,
      complete: () => {
        triggerState = false;
      },
    });
    anime({
      targets: ".FullNameline",
      width: 0,
      easing: "easeOutCubic",
      duration: 30,
    });
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
  }
}
