//first
const animateFirst = () => {
  const firstTL = anime.timeline({
    duration: 1000 / 8,
    complete: function () {
      firstTL.restart();
    },
    easing: "easeOutSine",
  });
  let elements = document.querySelectorAll(".first-circles");
  for (let el of elements) {
    firstTL.add({
      begin: () => {
        anime({
          targets: el,
          strokeWidth: [10, 9, 9, 10],
          r: [20, 0, 20],
          opacity: [1, 0, 1],
          delay: anime.stagger(1000 / 8),
          duration: 1000,
          easing: "easeOutSine",
        });
      },
    });
  }
};

//second
const animateSecond = () => {
  const secondTL = anime.timeline({
    targets: "#secondSVG",
    loop: true,
  });
  secondTL.add({
    rotate: 180,
    duration: 1200,
  });
};

//third
const animateThird = () => {
  let elements = document.querySelectorAll(".third-circles");
  let curEl = elements[0];
  anime({
    targets: curEl,
    translateX: 170,
    // translateY: [0, -50 , 0],
    loop: true,
    duration: 700,
    easing: "easeInOutBack",
    r: [31, 40, 31],
  });
  anime({
    loop: true,
    targets: [elements[1], elements[2]],
    translateX: -190 / 2,
    easing: "easeInOutBack",

    duration: 700,
  });
};

//fourth
const animateFourth = () => {
  let elements = document.querySelectorAll(".fourth-circles");
  let leftEl = elements[0];
  let rightEl = elements[1];
  anime({
    targets: leftEl,
    translateX: 100,
    loop: true,
    easing: "easeInOutSine",
    r: [35, 25, 35, 35],
    duration: 1000,
  });
  anime({
    targets: rightEl,
    translateX: -100,
    loop: true,
    easing: "easeInOutSine",
    r: [35, 55, 35, 35],
    duration: 1000,
  });
};

//fifth
const animateFifth = () => {
  const fifthTL = anime.timeline({
    duration: 3000,
    complete: function () {
      fifthTL.restart();
    },
    easing: "easeOutSine",
  });
  let elements = document.querySelectorAll(".fifth-circles");
  for (let el of elements) {
    fifthTL.add({
      begin: () => {
        anime({
          //   targets: el,
          targets: [elements[1], elements[2], elements[3]],
          r: [55, 95],
          opacity: [1, 0],
          delay: anime.stagger(1500 / 4),
          duration: 1500,
          easing: "easeOutSine",
        });
      },
    });
    anime({
      targets: elements[0],
      r: 60,
      delay: 1250,
      duration: 250,
      loop: true,
      easing: "linear",
      direction: "alternate",
    });
  }
};

//sixth
const animateSixth = () => {
  const sixthTL = anime.timeline({
    loop: true,
    easing: "easeInOutSine",
    duration: 2000,
  });

  //first frame
  sixthTL
    .add({
      targets: ".sixth-rect1",
      translateY: 54,
      duration: 500,
    })
    .add(
      {
        targets: ".sixth-rect2",
        translateX: -54,
        duration: 500,
      },
      0
    )
    .add(
      {
        targets: ".sixth-rect3",
        translateY: -54,
        duration: 500,
      },
      0
    )
    .add(
      {
        targets: ".sixth-rect4",
        translateX: 54,
        duration: 500,
        endDelay: 200,
      },
      0
    );

  //second frame
  sixthTL.add({
    targets: "#sixthSVG",
    duration: 500,
    rotate: 135,
    endDelay: 200,
  });

  //third frame
  sixthTL
    .add({
      targets: ".sixth-rect2",
      translateX: 0,
      duration: 500,
    })
    .add(
      {
        targets: ".sixth-rect4",
        translateX: 0,
        duration: 500,
        endDelay: 200,
      },
      "-=500"
    );

  //fourth frame
  sixthTL
    .add({
      targets: ".sixth-rect1",
      translateY: 0,
      duration: 500,
    })
    .add(
      {
        targets: ".sixth-rect4",
        translateX: 54,
        duration: 500,
      },
      "-=500"
    );

  //fifth frame
  sixthTL
    .add(
      {
        targets: ".sixth-rect3",
        translateY: 0,
        duration: 500,
      },
      "-=500"
    )
    .add(
      {
        targets: ".sixth-rect2",
        translateX: -54,
        duration: 500,
        endDelay: 200,
      },
      "-=500"
    );

  //sixth frame
  sixthTL
    .add({
      targets: ".sixth-rect1",
      translateY: 54,
      duration: 500,
    })
    .add(
      {
        targets: ".sixth-rect3",
        translateY: -54,
        duration: 500,
        endDelay: 200,
      },
      "-=500"
    );

  //seventh frame
  sixthTL.add({
    targets: "#sixthSVG",
    duration: 500,
    rotate: 270,
    endDelay: 200,
  });

  //eighth frame
  sixthTL
    .add({
      targets: ".sixth-rect1",
      translateY: 0,
      duration: 500,
    })
    .add(
      {
        targets: ".sixth-rect2",
        translateX: 0,
        duration: 500,
      },
      "-=500"
    )
    .add(
      {
        targets: ".sixth-rect3",
        translateY: 0,
        duration: 500,
      },
      "-=500"
    )
    .add(
      {
        targets: ".sixth-rect4",
        translateX: 0,
        duration: 500,
        endDelay: 200,
      },
      "-=500"
    );
};

const animateSeventh = () =>{
  let tl = anime.timeline({
    loop: true,
    easing: "easeOutQuad",
  });

  tl.add({
    targets: ".circle",
    height: 35,
    duration: 20,
  })
    .add({
      targets: ".circle",
      translateY: -290,
      easing: "easeOutQuad",
      duration: 500,
    })
    .add(
      {
        targets: ".circle",
        height: 70,
        duration: 300,
      },
      "-=500"
    )
    .add(
      {
        targets: ".circle",
        width: [70, 35, 70],
        duration: 300,
      },
      "-=500"
    )
    .add({
      targets: ".circle",
      translateY: 0,
      duration: 500,
      easing: "easeInQuad",
    })
    .add(
      {
        targets: ".circle",
        width: [70, 55],
        duration: 500,
      },
      "-=500"
    )
    .add({
      targets: ".circle",
      height: 35,
      width: 70,
      duration: 30,
    });

  //1150ms

  let tlRect = anime.timeline({
    loop: true,
    easing: "easeOutQuad",
  });

  tlRect
    .add({
      targets: ".rect",
      translateY: -180,
      rotate: 180,
      width: 90,
      height: 90,
      duration: 500,
      delay: 10,
    })
    .add({
      targets: ".rect",
      translateY: 0,
      duration: 500,
      easing: "easeInQuad",
    })
    .add(
      {
        targets: ".rect",
        width: 140,
        height: 40,
        duration: 500,
        easing: "easeInQuad",
      },
      "-=500"
    )
    .add({
      targets: ".rect",
      duration: 40,
    });
}