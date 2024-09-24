const svg = document.querySelector("svg");
const path = svg.querySelector("#ciz");
const scrollableSection = document.querySelector("#scrollsection");

const scroll = () => {
  //const distance = window.scrollY;
  // calculate how much scrolled in the section
  const distance = window.scrollY - scrollableSection.offsetTop / 2;
  if (
    distance >
    scrollableSection.offsetHeight - scrollableSection.offsetTop / 2
  ) {
    return;
  }
  if (distance < 0) {
    return;
  }
  const percentage = distance / scrollableSection.offsetHeight;

  const pathLength = path.getTotalLength();

  path.style.strokeDasharray = `${pathLength}`;
  path.style.strokeDashoffset = `${pathLength - pathLength * (percentage * 3)}`;
};

scroll();
window.addEventListener("scroll", scroll);
