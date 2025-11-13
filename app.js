// // function in js
// // block of code that performs a specfic task, csn be invoked whenever needed

// // function myFunction() {
// //     console.log("faizan bashir");
// //     console.log("How are you");  
// // }
// // myFunction();

// // function myFunction(msg) {// parameter
// //     console.log(msg);
// // }
// // myFunction("I love js"); // argument

// let sum1 = 2;
// let sum2 = 2;
// function greet(sum1,sum2) {
//     console.log(sum1 + sum2);
// }
// myFunction(sum1+sum2);

// function sum(y,x){
//     s = y + x;
//     return s
// }
// let val = sum (6,7);
// console.log(val);

// Arrow functions
// Compact way of writing a function

// const functionName =(param1,param2...) => {
//     do some work 
// }

// let sum = (a,b) => {
//     console.log(a+b);
// }
// sum(4,4);

// let mul = (a,b) => {
//     console.log(a*b);    
// }
// mul(2,4)

// praction Question

// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//             count++;
//     }
//     console.log(count);
    
// }
// countVowels("faizanbashir");

// let countVowe =(str) => {
//      let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//             count++;
//     }
//     console.log(count);
    
// }
// countVowe("faizanbashir");


// forEach loop in Arrays
// arr.forEach(callBackFunction)
// CallbackFunction : Here,  it is a function to execute for each element in the array
// *A cakkback is a function pased as ann argmennt to another function

// arr.array.forEach((element )=> {
    
// });

// let arr = [1,2,3,4,5];

// // arr.forEach(function myFunction(val) {
// //     console.log(val);
    
// // });

// arr.forEach ((val,idx,arr) => {
//     console.log(val,idx,arr);
    
// });

// // practice Question 

// let arrs = [1,3,5,6,8];
// arrs.forEach((val) => {
//     console.log(val*val);
// });

// Some More Array Methods 
// Map
// Create a new array with the results of some operation. The value its callback returns are used to from new array

// arr.map(callbackFnx(CValue,indexedDB,array));

// let newArr = arr.map((val) => {
//     return val *2;
// });

// let arrs = [1,3,5,6,8];

// let newArr = arrs.map((val) => {
//     return val *val
// });
// console.log(newArr);

// let arr = [1,2,3,4,5,6,7,8,9];

// let evenArr = arr.filter((val) => {
//     return val % 2 !== 0 
// });
// console.log(evenArr);


// let arr = [1,2,3,4,67];

// let redArr = arr.reduce((res, cur) => {
//     return res > cur ? res : cur
// });

// console.log(redArr);

// let mrks = [87,54,93,92,99,43];

// let total = mrks.filter((val) => {
//     return val >90
// });
// console.log(total);

// practice Question

// let n = prompt("enter a number?");
// let arr = [];

// for (let i = 1; i<= n; i++) {
//     arr [i-1] =i;
// }
// console.log(arr);
// let sum = arr.reduce((res, cur) => {
//     return res + cur
// });
// console.log(sum);
// let sum1 = arr.reduce((res, cur) => {
//     return res * cur
// });
// console.log("factorial "+sum1);

