import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 2,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 407.5924075924076, line_linked: { opacity: 1 } },
      bubble: {
        distance: 503.4965034965035,
        size: 40,
        duration: 1.6783216783216783,
        opacity: 0.23176823176823177,
        speed: 3,
      },
      repulse: { distance: 319.68031968031966, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

//! Typewriter effect
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

// Project section Swiper
var swiper = new Swiper(".swiper", {
  grabCursor: true,
  initialSlide: 4,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1000,
  freeMode: false,
  mousewheel: {
    thresholdDelta: 30,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
});
//! Project section Partivles Hintergrund
particlesJS("particles-js-2", {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 4,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: "right",
      random: true,
      straight: false,
      out_mode: "none",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
});

//! Typewriter effect
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Ahmed", "Fullstack Developer"];

const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      curWord = phrases[curPhraseIndex];
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      curWord = phrases[curPhraseIndex];
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();
const greetings = document.querySelector("#greetings");
const iam = document.querySelector("#iam");
const code = document.querySelector(".code");
const live = document.querySelector(".live");
const selectLang = document.querySelector(".lang");
const slogan = document.getElementById("slogan");

selectLang.addEventListener("change", (e) => {
  console.log("clicked");
  if (e.target.value == "de") {
    slogan.innerHTML =
      "Programmiersprachen und Frameworks sind die Werkzeuge, die wir verwenden, aber das Ziel hängt damit zusammen, wie gut die Benutzererfahrung ist.";
    greetings.innerHTML = "Halli Hallo";
    iam.innerHTML = "Ich bin";
    code.innerHTML = "Kode";
    live.innerHTML = "Demo";
    phrases[1] = "Fullstack Entwickler";
    contact.innerHTML = "Kontaktaufnahme";
  } else if (e.target.value == "tr") {
    slogan.innerHTML =
      "Programlama dilleri ve frameworkler kullandigimiz araclardir, fakat amac kullanici deneyiminin ne kadar iyi olduguyla alakalidir.";
    greetings.innerHTML = "Merhaba";
    iam.innerHTML = "Ben";
    code.innerHTML = "Kod";
    live.innerHTML = "Demo";
    phrases[1] = "Fullstack Gelistiriciyim";
    contact.innerHTML = "İletişime Geçin";
  } else {
    slogan.innerHTML =
      "Programming languages and frameworks are the tools we use, but the goal is related to how good the user experience is.";
    iam.innerHTML = "I am";
    greetings.innerHTML = "Hi";
    code.innerHTML = "Code";
    live.innerHTML = "Demo";
    phrases[1] = "Fullstack Developer";
    contact.innerHTML = "Get In Touch";
  }
});
