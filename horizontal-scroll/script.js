document.getElementById("leftBtn").addEventListener("click", () => {
  scrollItems("left");
});

document.getElementById("rightBtn").addEventListener("click", () => {
  scrollItems("right");
});

const scrollItems = direction => {
    let container = document.getElementById("itemContainer");
  let element = document.querySelector(".item");
  let width = element.clientWidth;
  console.log(width)
  if (direction === "left") {
    container.scrollLeft -= width;
    console.log("left")
  } else {
    container.scrollLeft += width;
    console.log("right");
  }
};
