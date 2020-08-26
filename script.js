// Old way
let arr = [10, 9, 8, 7, 6];
let x = arr[0];
let y = arr[1];
let z = arr[2];
console.log("x is : ", x);
console.log("y is : ", y);
console.log("z is : ", z);

//  New way
let arr1 = [10, 9, 8, 7, 6];
let [A, B, C, ...rest] = arr1;
console.log("A is : ", A);
console.log("B is : ", B);
console.log("C is : ", C);

//  Usual function in js
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

//  function treated as variable
const addData = (p, q) => {
  return a + b;
};
console.log(addData(3, 5));
