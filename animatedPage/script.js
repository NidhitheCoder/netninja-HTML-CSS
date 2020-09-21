let body = document.getElementById("main");

body.addEventListener("mousemove", (e) => {
  let elm = e.target;
  let height = window.innerHeight;
  let width =window.innerWidth;
  let y = e.clientY * 100 / height;
  let x = e.clientX * 100 / width;
  x = x * 3;
  y = y * 3;
  sum = x + y;
  elm.style.color = `rgb(${x},${y},${sum > 255 ? 255 - sum : sum})`;
  elm.style.background = `rgb(${sum > 255 ? 255 - sum : sum},${x},${y})`
});
