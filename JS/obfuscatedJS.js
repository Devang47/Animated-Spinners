const _0x1ffe = [
  ".sixth-rect2",
  "182103ZQekyH",
  "9611LKtcVg",
  "25622wEThvg",
  "2DsFUJM",
  ".sixth-rect3",
  "addEventListener",
  "-=500",
  "load",
  "stagger",
  "linear",
  "3533DWMAyb",
  "15XmuHfu",
  "#secondSVG",
  "restart",
  "#sixthSVG",
  "add",
  "1755290JMYMYW",
  "alternate",
  "easeInOutSine",
  "19jYMPOy",
  ".sixth-rect4",
  "704014IvvCXD",
  "easeOutSine",
  "885746rapvgu",
  ".fourth-circles",
  "53CxGUel",
  "timeline",
  "querySelectorAll",
  "easeInOutBack",
  ".sixth-rect1",
  ".third-circles",
];
const _0x5af7b8 = _0x1bff;
(function (_0x31e4a9, _0x16b38e) {
  const _0x329dff = _0x1bff;
  while (!![]) {
    try {
      const _0x3f202f =
        parseInt(_0x329dff(0x197)) * parseInt(_0x329dff(0x185)) +
        -parseInt(_0x329dff(0x183)) * -parseInt(_0x329dff(0x19b)) +
        parseInt(_0x329dff(0x18d)) * parseInt(_0x329dff(0x18c)) +
        parseInt(_0x329dff(0x195)) * -parseInt(_0x329dff(0x184)) +
        parseInt(_0x329dff(0x182)) +
        parseInt(_0x329dff(0x199)) +
        -parseInt(_0x329dff(0x192));
      if (_0x3f202f === _0x16b38e) break;
      else _0x31e4a9["push"](_0x31e4a9["shift"]());
    } catch (_0x4a9cb2) {
      _0x31e4a9["push"](_0x31e4a9["shift"]());
    }
  }
})(_0x1ffe, 0xc25f3);
const firstTL = anime[_0x5af7b8(0x19c)]({
    duration: 0x3e8 / 0x8,
    complete: function () {
      const _0x4fa787 = _0x5af7b8;
      firstTL[_0x4fa787(0x18f)]();
    },
    easing: _0x5af7b8(0x198),
  }),
  animateFirst = () => {
    const _0x1a8982 = _0x5af7b8;
    let _0x2bc41f = document[_0x1a8982(0x19d)](".first-circles");
    for (let _0xaceffe of _0x2bc41f) {
      firstTL[_0x1a8982(0x191)]({
        begin: () => {
          anime({
            targets: _0xaceffe,
            strokeWidth: [0xa, 0x9, 0x9, 0xa],
            r: [0x14, 0x0, 0x14],
            opacity: [0x1, 0x0, 0x1],
            delay: anime["stagger"](0x3e8 / 0x8),
            duration: 0x3e8,
            easing: "easeOutSine",
          });
        },
      });
    }
  };
window[_0x5af7b8(0x187)](_0x5af7b8(0x189), animateFirst());
function _0x1bff(_0x92a52f, _0x30e64b) {
  return (
    (_0x1bff = function (_0x1ffe1e, _0x1bff52) {
      _0x1ffe1e = _0x1ffe1e - 0x180;
      let _0x58404b = _0x1ffe[_0x1ffe1e];
      return _0x58404b;
    }),
    _0x1bff(_0x92a52f, _0x30e64b)
  );
}
const animateSecond = () => {
  const _0x31cf71 = _0x5af7b8,
    _0x31bcdf = anime[_0x31cf71(0x19c)]({
      targets: _0x31cf71(0x18e),
      loop: !![],
    });
  _0x31bcdf[_0x31cf71(0x191)]({ rotate: 0xb4, duration: 0x4b0 });
};
window[_0x5af7b8(0x187)](_0x5af7b8(0x189), animateSecond);
const animateThird = () => {
  const _0x25b7f3 = _0x5af7b8;
  let _0x3ea9c7 = document[_0x25b7f3(0x19d)](_0x25b7f3(0x180)),
    _0x5b5eb6 = _0x3ea9c7[0x0];
  anime({
    targets: _0x5b5eb6,
    translateX: 0xbe,
    loop: !![],
    duration: 0x2bc,
    easing: _0x25b7f3(0x19e),
    r: [0x1f, 0x28, 0x1f],
  }),
    anime({
      loop: !![],
      targets: [_0x3ea9c7[0x1], _0x3ea9c7[0x2]],
      translateX: -0xbe / 0x2,
      easing: "easeInOutBack",
      duration: 0x2bc,
    });
};
window[_0x5af7b8(0x187)](_0x5af7b8(0x189), animateThird);
const animateFourth = () => {
  const _0x498e86 = _0x5af7b8;
  let _0x3f0431 = document["querySelectorAll"](_0x498e86(0x19a)),
    _0x13f8fd = _0x3f0431[0x0],
    _0x435c63 = _0x3f0431[0x1];
  anime({
    targets: _0x13f8fd,
    translateX: 0x64,
    loop: !![],
    easing: _0x498e86(0x194),
    r: [0x23, 0x19, 0x23, 0x23],
    duration: 0x3e8,
  }),
    anime({
      targets: _0x435c63,
      translateX: -0x64,
      loop: !![],
      easing: "easeInOutSine",
      r: [0x23, 0x37, 0x23, 0x23],
      duration: 0x3e8,
    });
};
window[_0x5af7b8(0x187)](_0x5af7b8(0x189), animateFourth);
const fifthTL = anime[_0x5af7b8(0x19c)]({
    duration: 0xbb8,
    complete: function () {
      const _0x6bb43 = _0x5af7b8;
      fifthTL[_0x6bb43(0x18f)]();
    },
    easing: _0x5af7b8(0x198),
  }),
  animateFifth = () => {
    const _0x1b3478 = _0x5af7b8;
    let _0x15d504 = document[_0x1b3478(0x19d)](".fifth-circles");
    for (let _0x371a30 of _0x15d504) {
      fifthTL[_0x1b3478(0x191)]({
        begin: () => {
          const _0xa8bd73 = _0x1b3478;
          anime({
            targets: [_0x15d504[0x1], _0x15d504[0x2], _0x15d504[0x3]],
            r: [0x37, 0x5f],
            opacity: [0x1, 0x0],
            delay: anime[_0xa8bd73(0x18a)](0x5dc / 0x4),
            duration: 0x5dc,
            easing: "easeOutSine",
          });
        },
      }),
        anime({
          targets: _0x15d504[0x0],
          r: 0x3c,
          delay: 0x4e2,
          duration: 0xfa,
          loop: !![],
          easing: _0x1b3478(0x18b),
          direction: _0x1b3478(0x193),
        });
    }
  };
window[_0x5af7b8(0x187)](_0x5af7b8(0x189), animateFifth());
const animateSixth = () => {
  const _0x5ab21a = _0x5af7b8,
    _0x16281d = anime[_0x5ab21a(0x19c)]({
      loop: !![],
      easing: _0x5ab21a(0x194),
      duration: 0x7d0,
    });
  _0x16281d[_0x5ab21a(0x191)]({
    targets: _0x5ab21a(0x19f),
    translateY: 0x36,
    duration: 0x1f4,
  })
    ["add"](
      { targets: _0x5ab21a(0x181), translateX: -0x36, duration: 0x1f4 },
      0x0
    )
    [_0x5ab21a(0x191)](
      { targets: _0x5ab21a(0x186), translateY: -0x36, duration: 0x1f4 },
      0x0
    )
    ["add"](
      {
        targets: _0x5ab21a(0x196),
        translateX: 0x36,
        duration: 0x1f4,
        endDelay: 0xc8,
      },
      0x0
    ),
    _0x16281d[_0x5ab21a(0x191)]({
      targets: _0x5ab21a(0x190),
      duration: 0x1f4,
      rotate: 0x87,
      endDelay: 0xc8,
    }),
    _0x16281d[_0x5ab21a(0x191)]({
      targets: _0x5ab21a(0x181),
      translateX: 0x0,
      duration: 0x1f4,
    })[_0x5ab21a(0x191)](
      {
        targets: _0x5ab21a(0x196),
        translateX: 0x0,
        duration: 0x1f4,
        endDelay: 0xc8,
      },
      _0x5ab21a(0x188)
    ),
    _0x16281d[_0x5ab21a(0x191)]({
      targets: _0x5ab21a(0x19f),
      translateY: 0x0,
      duration: 0x1f4,
    })[_0x5ab21a(0x191)](
      { targets: _0x5ab21a(0x196), translateX: 0x36, duration: 0x1f4 },
      _0x5ab21a(0x188)
    ),
    _0x16281d["add"](
      { targets: _0x5ab21a(0x186), translateY: 0x0, duration: 0x1f4 },
      _0x5ab21a(0x188)
    )[_0x5ab21a(0x191)](
      {
        targets: ".sixth-rect2",
        translateX: -0x36,
        duration: 0x1f4,
        endDelay: 0xc8,
      },
      "-=500"
    ),
    _0x16281d["add"]({
      targets: _0x5ab21a(0x19f),
      translateY: 0x36,
      duration: 0x1f4,
    })[_0x5ab21a(0x191)](
      {
        targets: ".sixth-rect3",
        translateY: -0x36,
        duration: 0x1f4,
        endDelay: 0xc8,
      },
      _0x5ab21a(0x188)
    ),
    _0x16281d[_0x5ab21a(0x191)]({
      targets: _0x5ab21a(0x190),
      duration: 0x1f4,
      rotate: 0x10e,
      endDelay: 0xc8,
    }),
    _0x16281d["add"]({
      targets: ".sixth-rect1",
      translateY: 0x0,
      duration: 0x1f4,
    })
      [_0x5ab21a(0x191)](
        { targets: _0x5ab21a(0x181), translateX: 0x0, duration: 0x1f4 },
        _0x5ab21a(0x188)
      )
      [_0x5ab21a(0x191)](
        { targets: ".sixth-rect3", translateY: 0x0, duration: 0x1f4 },
        "-=500"
      )
      [_0x5ab21a(0x191)](
        {
          targets: _0x5ab21a(0x196),
          translateX: 0x0,
          duration: 0x1f4,
          endDelay: 0xc8,
        },
        _0x5ab21a(0x188)
      );
};
window[_0x5af7b8(0x187)](_0x5af7b8(0x189), animateSixth());
