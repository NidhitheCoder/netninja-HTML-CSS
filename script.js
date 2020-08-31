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

// //  sum all the values from an array
// let numbers = [3,5,7,9];
// let sum = numbers.reduce((x,y) =>  x+y);
// console.log(sum);

// //  short circuit contitional
// let hungry = "yes";
// if(hungry) {
//   console.log("need some food...");
// }

// hungry && console.log("need some extra food");

// // use logial or for conditions
// let args ;
// args = args || "jude";
// console.log("argument is : ",args);

// // coma operator
// let x = 1;
// x = (x++, x);
// console.log(x);  // expected output

// x = (2,3);
// console.log("x is now " ,x);

// // filter unique values in an array *Important
// const num = [1,1,2,3,8,3,2,2,1,3,4,47,7,3,2,2];
// const uniqueArray = [...new Set(num)];
// console.log(uniqueArray);

// console.log(num || []) // if array  then console array elements otherwise console 0;

// // simple conditional *Important
// let count = "1" ;
// // traditional way
// if(count) {
//     console.log(count);
// } else {
//     console.log("Not available");
// }

// // simple and optimised way
// console.log(count || "Not available");

// const isTrue = !0;
// const isFalse = !1;
// const alsoFalse = !!0;

// // creating completely empty objects
// let obj = Object.create(null);
// console.log(typeof(obj));

// // truncate elements in an array
// let fruits = ["orange","apple","mango","cherry","pineapple","grapes"];
// fruits.length = 3;
// console.log(fruits);

// // merging off objects // if there where not in same keyname
// let obj1 = {"name":"ajay","age" : 22};
// let obj2 = {"client" :"july"};

// const mergeObject = (obj1,obj2) => {
// for (let key in obj2){
//   if(obj2.hasOwnProperty(key)) obj1[key] = obj2[key];
// }
// return obj1;
// }

// // console.log(mergeObject(obj1,obj2));

// let one = 1, two = 2, three = 3;
// console.log(one && two && three);

// // easy convertion to string
// let num = 2;
// console.log(typeof num);

// num += "";
// console.log(num);
// console.log(typeof num);

// // easy convertion to number
// let  strNum = "15";
// console.log(typeof strNum);
//  strNum = +strNum;
//  console.log(strNum);
//  console.log(typeof strNum);
//  console.log(+true);
//  console.log(+false);

// //  quick power
// console.log(2**3);
// console.log(2 << 2); //equal to 2**3 . this operator means Math.pow(2,(n-1))

// // quicker way to float to integer .if you are sure its a float value.
// console.log(28.55 | 0);
// console.log(33.44 | 0);

// //remove last element  usual way
// let srt = "1553";
// console.log(srt.substring(0, srt.length - 1));
// console.log(srt);

// // quicker way
// console.log((srt / 100) | 0);
// console.log((12342 / 10) | 0);

// get last item of array
let color = ["red","green","orange","blue","white"];
// console.log(color.splice(-1)); // return last one item
console.log(color.splice(-3)); // return last 3 items