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
  elm.style.background = `rgb(${sum > 255 ? 255 - sum : sum},${x},${y})`;

  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let circles = document.querySelectorAll(".circle");

  circles = [...circles];

  for(let i=0;i<circles.length;i++){
    let circle = circles[i];
    circle.style.top = num1 * i ;
    circle.style.left = num2 * i ;
  }
});
