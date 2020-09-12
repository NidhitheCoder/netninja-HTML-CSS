document.getElementById("leftMove").addEventListener("click", () => {
  scrollItems("left");
});

document.getElementById("rightMove").addEventListener("click", () => {
  scrollItems("right");
});

const scrollItems = direction => {
  let element = document.getElementById("testominals");
  let width = element.clientWidth;
  if (direction === "left") {
    element.scrollLeft -= width;
  } else {
    element.scrollLeft += width;
  }
};
