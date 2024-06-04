// Write a function that counts int number of digits
//Ex: intCount(303) -> 3
//intCount(1500) -> 4

//function intCount

// const countDigits = (int) => {
//     return (int.toString()).length
// }
// //number of numbers in given number
// //negative numbers
// /*
// Transform each number into + number, turn into a string 
// slpit and cout the array length to return the number of numbers
// */

// // 1- Find the absolute value of number passed in the function and set that to variables
// // 2- turn the number into string
// // 3- return the length of numbers.
// // function intCount(n) {
// //     let positive = Math.abs(n)
// //     let numString = positive.toString
// //     return numString.length
// // }
// // console.log(intCount(123))
// const digitCount = (n) => { 
//     if(Number.isInteger(n)) {
//         if(n > 0) {
//             let digits = 1 
//             while(n > 10) {
//                 digits++
//                 n/= 10
//             }
//             return digits
//         } else if (n < 0){
//             let digit = 1
//             while(n < - 10) {
//                 digits++
//                 n/= 10
//             }
//             return digits
//         } else {
//             return 1
//         }
//     }
// }
// console.log(digitCount(12345678))


/*
1- create a function that take a array of interger as an argument and returns the same array in a acending order
using sort() method 

2- you have to sort the arra creating es5 own algorithum
*/

// const numUp  = [1, 8, 4, 5]
//     numUp.sort(a, b) => a - b

// console.log(numUp)
function compareNumbers(a, b) {
    return a - b;
  }
const numUp = ['1', '8', '83', '29'];
numUp.sort(compareNumbers);
console.log(numUp);