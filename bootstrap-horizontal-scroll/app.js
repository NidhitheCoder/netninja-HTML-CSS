document.getElementById("leftMove").addEventListener("click", () => {
  scrollItems("left");
});

document.getElementById("rightMove").addEventListener("click", () => {
  scrollItems("right");
});

const scrollItems = direction => {
  let element = document.getElementById("testominals");
  let width = element.clientWidth;
  console.log("haii");
  console.log(element.scrollLeft);
  if (direction === "left") {
    element.scrollLeft -= width;
  } else {
    element.scrollLeft += width;
  }
};
