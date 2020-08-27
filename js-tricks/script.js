// // Old way
// let arr = [10, 9, 8, 7, 6];
// let x = arr[0];
// let y = arr[1];
// let z = arr[2];
// console.log("x is : ", x);
// console.log("y is : ", y);
// console.log("z is : ", z);

// //  New way
// let arr1 = [10, 9, 8, 7, 6];
// let [A, B, C, ...rest] = arr1;
// console.log("A is : ", A);
// console.log("B is : ", B);
// console.log("C is : ", C);

// //  Usual function in js
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 4));

// //  function treated as variable
// const addData = (p, q) => {
//   return a + b;
// };
// console.log(addData(3, 5));

//  sum all the values from an array
let numbers = [3,5,7,9];
let sum = numbers.reduce((x,y) =>  x+y);
console.log(sum);

//  short circuit contitional
let hungry = "yes";
if(hungry) {
  console.log("need some food...");
}

hungry && console.log("need some extra food");

// use logial or for conditions
let args ;
args = args || "jude";
console.log("argument is : ",args);

// coma operator
let x = 1;
x = (x++, x);
console.log(x);  // expected output

x = (2,3);
console.log("x is now " ,x);