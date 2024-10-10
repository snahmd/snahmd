const svg = document.querySelector("svg");
const path = svg.querySelector("#ciz");
const scrollableSection = document.querySelector("#scrollsection");

const scroll = () => {
  //const distance = window.scrollY;
  // calculate how much scrolled in the section
  const pathLength = path.getTotalLength();

  const distance = window.scrollY - scrollableSection.offsetTop / 2;
  if (
    distance >
    scrollableSection.offsetHeight - scrollableSection.offsetTop / 2
  ) {
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `0`;
    return;
  }
  if (distance < 0) {
    return;
  }
  const percentage = distance / scrollableSection.offsetHeight;

  path.style.strokeDasharray = `${pathLength}`;
  path.style.strokeDashoffset = `${Math.max(
    0,
    pathLength - pathLength * (percentage * 2)
  )}`;
};

//scroll();
window.addEventListener("scroll", scroll);
