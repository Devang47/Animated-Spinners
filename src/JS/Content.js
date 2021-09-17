import Swiper from "swiper";
import "swiper/css";

// swiper init
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

let htmlCode, cssCode, jsCode, rootCss;
const addContent = () => {
  // ignore it (bug)
  if (localStorage.getItem("theme") == "stroked") {
    rootCss =
      ":root{--stroke:#61cbf5;--head:#aee8ff;--fill:#0000;--textFill:#61cbf5;--border:#61cbf5}";
  } else {
    rootCss =
      ":root{--stroke:#61cbf5;--head:#aee8ff;--fill:#61cbf5;--textFill:#000;--border:#61cbf500}";
  }
  // document.querySelector(".htmlCode").innerHTML = htmlCode;
  document.querySelector("#css-code").innerHTML = rootCss + cssCode;
  // document.querySelector("#js-code").innerHTML = jsCode;
  swiper.on("slideChange", () => {
    if (swiper.activeIndex == 1) {
      htmlCode =
        "&lt;div class=&quot;item item1&quot;&gt; &lt;svg id=&quot;firstSVG&quot; width=&quot;306&quot; height=&quot;306&quot; viewBox=&quot;0 0 306 306&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; &gt; &lt;circle class=&quot;first-circles&quot; cx=&quot;153&quot; cy=&quot;73&quot; r=&quot;20&quot; stroke=&quot;black&quot; stroke-width=&quot;7&quot; /&gt; &lt;circle class=&quot;first-circles&quot; cx=&quot;208.833&quot; cy=&quot;95.5&quot; r=&quot;20&quot; stroke=&quot;black&quot; stroke-width=&quot;7&quot; /&gt; &lt;circle class=&quot;first-circles&quot; cx=&quot;233&quot; cy=&quot;153&quot; r=&quot;20&quot; stroke=&quot;black&quot; stroke-width=&quot;7&quot; /&gt; &lt;circle class=&quot;first-circles&quot; cx=&quot;208.833&quot; cy=&quot;208.833&quot; r=&quot;20&quot; stroke=&quot;black&quot; stroke-width=&quot;7&quot; /&gt; &lt;circle class=&quot;first-circles&quot; cx=&quot;153&quot; cy=&quot;233&quot; r=&quot;20&quot; stroke=&quot;black&quot; stroke-width=&quot;7&quot; /&gt; &lt;circle class=&quot;first-circles&quot; cx=&quot;96.3333&quot; cy=&quot;208.833&quot; r=&quot;20&quot; stroke=&quot;black&quot; stroke-width=&quot;7&quot; /&gt; &lt;circle class=&quot;first-circles&quot; cx=&quot;73&quot; cy=&quot;153&quot; r=&quot;20&quot; stroke=&quot;black&quot; stroke-width=&quot;7&quot; /&gt; &lt;circle class=&quot;first-circles&quot; cx=&quot;95.5&quot; cy=&quot;97.1667&quot; r=&quot;20&quot; stroke=&quot;black&quot; stroke-width=&quot;7&quot; /&gt; &lt;/svg&gt;&lt;/div&gt;   &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js&quot; integrity=&quot;sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==&quot; crossorigin=&quot;anonymous&quot; referrerpolicy=&quot;no-referrer&quot;&gt;&lt;/script&gt;";
      cssCode =
        ".item1{width:100%;height:100%;display:grid;place-items:center;svg{fill:var(--fill);circle{stroke:var(--stroke);filter:drop-shadow(0 0 5px #1d355788)}}}";
      jsCode =
        'const firstTL=anime.timeline({duration:1000/8,complete:function(){firstTL.restart();},easing:"easeOutSine",});let elements=document.querySelectorAll(".first-circles");for(let el of elements){firstTL.add({begin:()=>{anime({targets:el,strokeWidth:[10,9,9,10],r:[20,0,20],opacity:[1,0,1],delay:anime.stagger(1000/8),duration:1000,easing:"easeOutSine",});},});}';
    } else if (swiper.activeIndex == 2) {
      htmlCode =
        "&lt;div class=&quot;item item2&quot;&gt; &lt;svg width=&quot;306&quot; id=&quot;secondSVG&quot; height=&quot;306&quot; viewBox=&quot;0 0 306 306&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; &gt; &lt;circle class=&quot;second-circles&quot; cx=&quot;112&quot; cy=&quot;153&quot; r=&quot;35&quot; stroke=&quot;black&quot; stroke-width=&quot;8&quot; /&gt; &lt;circle class=&quot;second-circles&quot; cx=&quot;209&quot; cy=&quot;153&quot; r=&quot;35&quot; stroke=&quot;black&quot; stroke-width=&quot;8&quot; /&gt; &lt;/svg&gt;&lt;/div&gt;   &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js&quot; integrity=&quot;sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==&quot; crossorigin=&quot;anonymous&quot; referrerpolicy=&quot;no-referrer&quot;&gt;&lt;/script&gt;";
      cssCode =
        ".item2{width:100%;height:100%;display:grid;place-items:center;svg{fill:var(--fill);circle{stroke:var(--stroke);filter:drop-shadow(0 0 5px #1d355788)}}}";
      jsCode =
        'const secondTL=anime.timeline({targets:"#secondSVG",loop:true,});secondTL.add({rotate:180,duration:1200,});';
    } else if (swiper.activeIndex == 3) {
      htmlCode =
        "&lt;div class=&quot;item item3&quot;&gt; &lt;svg id=&quot;thirdSVG&quot; width=&quot;306&quot; height=&quot;306&quot; viewBox=&quot;0 0 306 306&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; &gt; &lt;circle class=&quot;third-circles&quot; cx=&quot;59&quot; cy=&quot;153&quot; r=&quot;31&quot; stroke=&quot;black&quot; stroke-width=&quot;10&quot; /&gt; &lt;circle class=&quot;third-circles&quot; cx=&quot;153&quot; cy=&quot;153&quot; r=&quot;31&quot; stroke=&quot;black&quot; stroke-width=&quot;10&quot; /&gt; &lt;circle class=&quot;third-circles&quot; cx=&quot;247&quot; cy=&quot;153&quot; r=&quot;31&quot; stroke=&quot;black&quot; stroke-width=&quot;10&quot; /&gt; &lt;/svg&gt;&lt;/div&gt;   &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js&quot; integrity=&quot;sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==&quot; crossorigin=&quot;anonymous&quot; referrerpolicy=&quot;no-referrer&quot;&gt;&lt;/script&gt;";
      cssCode =
        ".item3{width:100%;height:100%;display:grid;place-items:center;svg{fill:var(--fill);circle{stroke:var(--stroke);filter:drop-shadow(0 0 5px #1d355788)}}}";
      jsCode =
        'let elements=document.querySelectorAll(".third-circles");let curEl=elements[0];anime({targets:curEl,translateX:170,loop:true,duration:700,easing:"easeInOutBack",r:[31,40,31],});anime({loop:true,targets:[elements[1],elements[2]],translateX:-190/2,easing:"easeInOutBack",duration:700,});';
    } else if (swiper.activeIndex == 4) {
      htmlCode =
        "&lt;div class=&quot;item item4&quot;&gt; &lt;svg width=&quot;306&quot; id=&quot;fourthSVG&quot; height=&quot;306&quot; viewBox=&quot;0 0 306 306&quot; fill=&quot;#01131a&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; &gt; &lt;circle class=&quot;fourth-circles&quot; cx=&quot;112&quot; cy=&quot;153&quot; r=&quot;35&quot; stroke=&quot;black&quot; stroke-width=&quot;8&quot; /&gt; &lt;circle class=&quot;fourth-circles&quot; cx=&quot;209&quot; cy=&quot;153&quot; r=&quot;35&quot; stroke=&quot;black&quot; stroke-width=&quot;8&quot; /&gt; &lt;/svg&gt;&lt;/div&gt;   &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js&quot; integrity=&quot;sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==&quot; crossorigin=&quot;anonymous&quot; referrerpolicy=&quot;no-referrer&quot;&gt;&lt;/script&gt;";
      cssCode =
        ".item4{width:100%;height:100%;display:grid;place-items:center;svg{fill:var(--fill);circle{stroke:var(--stroke);filter:drop-shadow(0 0 5px #1d355788)}}}";
      jsCode =
        'let elements=document.querySelectorAll(".fourth-circles");let leftEl=elements[0];let rightEl=elements[1];anime({targets:leftEl,translateX:100,loop:true,easing:"easeInOutSine",r:[35,25,35,35],duration:1000,});anime({targets:rightEl,translateX:-100,loop:true,easing:"easeInOutSine",r:[35,55,35,35],duration:1000,});';
    } else if (swiper.activeIndex == 5) {
      htmlCode =
        "&lt;div class=&quot;item item5&quot;&gt; &lt;svg id=&quot;fifthSVG&quot; width=&quot;306&quot; height=&quot;306&quot; viewBox=&quot;0 0 306 306&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; &gt; &lt;circle class=&quot;fifth-circles&quot; cx=&quot;153&quot; cy=&quot;153&quot; r=&quot;55&quot; stroke=&quot;black&quot; stroke-width=&quot;2&quot; /&gt; &lt;circle class=&quot;fifth-circles&quot; cx=&quot;153&quot; cy=&quot;153&quot; r=&quot;55&quot; stroke=&quot;black&quot; stroke-width=&quot;2&quot; /&gt; &lt;circle class=&quot;fifth-circles&quot; cx=&quot;153&quot; cy=&quot;153&quot; r=&quot;55&quot; stroke=&quot;black&quot; stroke-width=&quot;2&quot; /&gt; &lt;circle class=&quot;fifth-circles&quot; cx=&quot;153&quot; cy=&quot;153&quot; r=&quot;55&quot; stroke=&quot;black&quot; stroke-width=&quot;2&quot; /&gt; &lt;/svg&gt; &lt;/div&gt;  &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js&quot; integrity=&quot;sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==&quot; crossorigin=&quot;anonymous&quot; referrerpolicy=&quot;no-referrer&quot;&gt;&lt;/script&gt;";
      cssCode =
        "@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap');.item5{width:100%;height:100%;display:grid;place-items:center;position:relative;&::after{position:absolute;top:50%;left:50%;transform:translate(-50% , -50%);content:'Dev';font-weight:600;font-size:20px;color:var(--textFill);font-family:'Montserrat Alternates',sans-serif}svg{position:relative;fill:var(--fill);circle{stroke:var(--stroke);filter:drop-shadow(0 0 5px #1d355788)}}}";
      jsCode =
        'const fifthTL=anime.timeline({duration:3000,complete:function(){fifthTL.restart();},easing:"easeOutSine",});let elements=document.querySelectorAll(".fifth-circles");for(let el of elements){fifthTL.add({begin:()=>{anime({targets:[elements[1],elements[2],elements[3]],r:[55,95],opacity:[1,0],delay:anime.stagger(1500/4),duration:1500,easing:"easeOutSine",});},});anime({targets:elements[0],r:60,delay:1250,duration:250,loop:true,easing:"linear",direction:"alternate",});}';
    } else if (swiper.activeIndex == 6) {
      visitBtn.disabled = false;

      document.querySelector("#getSource-btn").innerHTML = "Source";
      htmlCode =
        "&lt;div class=&quot;item item6&quot;&gt; &lt;svg id=&quot;sixthSVG&quot; width=&quot;306&quot; height=&quot;306&quot; viewBox=&quot;0 0 306 306&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; &gt; &lt;path class=&quot;sixth-rect1&quot; d=&quot;M190.032 87.9865L218.032 87.9865V162.987H190.032V87.9865Z&quot; fill=&quot;#E1EFFF&quot; stroke=&quot;black&quot; stroke-width=&quot;6&quot; /&gt; &lt;path class=&quot;sixth-rect2&quot; d=&quot;M218.698 189.191V217.191H143.698V189.191H218.698Z&quot; fill=&quot;#E1EFFF&quot; stroke=&quot;black&quot; stroke-width=&quot;6&quot; /&gt; &lt;path class=&quot;sixth-rect3&quot; d=&quot;M88.0325 142.987L116.032 142.987L116.032 217.987H88.0325L88.0325 142.987Z&quot; fill=&quot;#E1EFFF&quot; stroke=&quot;black&quot; stroke-width=&quot;6&quot; /&gt; &lt;path class=&quot;sixth-rect4&quot; d=&quot;M163.032 87.9865V115.987L88.0325 115.987L88.0325 87.9865L163.032 87.9865Z&quot; fill=&quot;#E1EFFF&quot; stroke=&quot;black&quot; stroke-width=&quot;6&quot; /&gt; &lt;/svg&gt;&lt;/div&gt;   &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js&quot; integrity=&quot;sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==&quot; crossorigin=&quot;anonymous&quot; referrerpolicy=&quot;no-referrer&quot;&gt;&lt;/script&gt;";
      cssCode =
        ".item6{width:100%;height:100%;display:grid;place-items:center;svg{fill:var(--fill);path{fill:var(--stroke)}}}#sixthSVG{path{fill:var(--fill);stroke:var(--stroke)}}";
      jsCode =
        'const sixthTL=anime.timeline({loop:true,easing:"easeInOutSine",duration:2000,});sixthTL.add({targets:".sixth-rect1",translateY:54,duration:500,}).add({targets:".sixth-rect2",translateX:-54,duration:500,},0).add({targets:".sixth-rect3",translateY:-54,duration:500,},0).add({targets:".sixth-rect4",translateX:54,duration:500,endDelay:200,},0);sixthTL.add({targets:"#sixthSVG",duration:500,rotate:135,endDelay:200,});sixthTL.add({targets:".sixth-rect2",translateX:0,duration:500,}).add({targets:".sixth-rect4",translateX:0,duration:500,endDelay:200,},"-=500");sixthTL.add({targets:".sixth-rect1",translateY:0,duration:500,}).add({targets:".sixth-rect4",translateX:54,duration:500,},"-=500");sixthTL.add({targets:".sixth-rect3",translateY:0,duration:500,},"-=500").add({targets:".sixth-rect2",translateX:-54,duration:500,endDelay:200,},"-=500");sixthTL.add({targets:".sixth-rect1",translateY:54,duration:500,}).add({targets:".sixth-rect3",translateY:-54,duration:500,endDelay:200,},"-=500");sixthTL.add({targets:"#sixthSVG",duration:500,rotate:270,endDelay:200,});sixthTL.add({targets:".sixth-rect1",translateY:0,duration:500,}).add({targets:".sixth-rect2",translateX:0,duration:500,},"-=500").add({targets:".sixth-rect3",translateY:0,duration:500,},"-=500").add({targets:".sixth-rect4",translateX:0,duration:500,endDelay:200,},"-=500");';
    } else if (swiper.activeIndex == 7) {
      animateSeventh();
      visitBtn.innerHTML = "Thanks for Visiting";
      // visitBtn.style.display = 'none'
      visitBtn.disabled = true;

      htmlCode = "Thanks for visiting";
      jsCode = "¯_(ツ)_/¯";
      cssCode = "";
    } else {
      htmlCode =
        "&lt;div class=&quot;item item0&quot;&gt;&lt;div class=&quot;item0Wrapper&quot;&gt;&lt;div class=&quot;circle&quot;&gt;&lt;/div&gt;&lt;div class=&quot;rect&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;  &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js&quot; integrity=&quot;sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==&quot; crossorigin=&quot;anonymous&quot; referrerpolicy=&quot;no-referrer&quot;&gt;&lt;/script&gt;";
      cssCode =
        ".item0{margin-top: 100px;height: 400px}.item0Wrapper{height:100%;width:100%;margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0}.circle{margin-top:auto;height:35px;width:70px;background-color:var(--fill);border-radius:50%;border:4px solid var(--border)}.rect{height:40px;width:140px;background-color:var(--fill);border-radius:5px;border:4px solid var(--border)}";

      jsCode =
        'let tl=anime.timeline({loop:true,easing:"easeOutQuad",});tl.add({targets:".circle",height:35,duration:20,}).add({targets:".circle",translateY:-290,easing:"easeOutQuad",duration:500,}).add({targets:".circle",height:70,duration:300,},"-=500").add({targets:".circle",width:[70,35,70],duration:300,},"-=500").add({targets:".circle",translateY:0,duration:500,easing:"easeInQuad",}).add({targets:".circle",width:[70,55],duration:500,},"-=500").add({targets:".circle",height:35,width:70,duration:30,});let tlRect=anime.timeline({loop:true,easing:"easeOutQuad",});tlRect.add({targets:".rect",translateY:-180,rotate:180,width:90,height:90,duration:500,delay:10,}).add({targets:".rect",translateY:0,duration:500,easing:"easeInQuad",}).add({targets:".rect",width:140,height:40,duration:500,easing:"easeInQuad",},"-=500").add({targets:".rect",duration:40,});';
    }

    if (localStorage.getItem("theme") == "stroked") {
      rootCss =
        ":root{--stroke:#61cbf5;--head:#aee8ff;--fill:#0000;--textFill:#61cbf5;--border:#61cbf5}";
    } else {
      rootCss =
        ":root{--stroke:#61cbf5;--head:#aee8ff;--fill:#61cbf5;--textFill:#000;--border:#61cbf500}";
    }
    document.querySelector(".htmlCode").innerHTML = htmlCode;
    document.querySelector("#css-code").innerHTML = rootCss + cssCode;
    document.querySelector("#js-code").innerHTML = jsCode;
  });
};

swiper.on("slideChange", addContent());

export default addContent;
