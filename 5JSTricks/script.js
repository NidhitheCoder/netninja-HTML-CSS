// 1. query selectors
document.getElementById("name").addEventListener("click", () => {
  let element = document.querySelector(".name span");
  element.innerHTML = "July";
});

document.getElementById('age').addEventListener("click",() => {
    let elements = document.querySelectorAll("Div");
    elements.forEach(element => {
        element.style.backgroundColor = "orangered";
    })
})


//  2 Array Methods

//  2.1 forEach
const fruits = ["apple","pear","grape","orange"];
let result = document.getElementById("results");
fruits.forEach(el => {
result.innerHTML += el + ", "
})

// 2.2 Reduce
let nums = [1,2,3,4,5];
result.innerHTML += `<br> ${nums.reduce((a,b) => a+b)}`; 
// end of the reduce method contain accumulator
// Accumulator can be anything array,number,object,string etc..


// reduce the size of the array.
const fruits1 = [
    {name:"apple",price :4},
    {name:"orange",price:2},
    {name :"grape",price:5}
];
const fruitPrices = fruits1.reduce((a,b) =>{
a[name] = b.price;
return a;
},{});
console.log(fruitPrices)

// 3.destructing tricks
const colors ={name:"red",price:2};
const {price} = colors;
result.innerHTML += `<br> ${price}`
       
