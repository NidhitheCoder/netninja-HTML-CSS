document.getElementById("leftBtn").addEventListener("click", () => {
  scrollItems("left");
});

document.getElementById("rightBtn").addEventListener("click", () => {
  scrollItems("right");
});

const scrollItems = direction => {
    let container = document.getElementById("itemContainer");

  let width = window.innerWidth;
  console.log(width)
  if (direction === "left") {
    container.scrollLeft -= width;
    console.log("left : ",container.scrollLeft)
  } else {
    container.scrollLeft += width;
    console.log("right : ",container.scrollLeft);
  }
};
