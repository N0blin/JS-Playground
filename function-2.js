// // Create a function that takes an array and retien types of the element (data tpys) in a new array
// //ex: arrTypes([1,2, "Ali", []]) -> ["number", "number", "string", "object"]

// function arrTypes(arr) {
//     let newArray = []
//     for(let i = 0; i<arr.length; i++){
//         newArray[i] = typeof(arr[i])
//     }
//     return newArray
// }
// console.log(arrTypes)([1,2, "Ali", []])
// //ES6
//const arrTypesNew = arr => arr.map(x => typeof x)


// //Create a function that takes 2-D arrarys and returns the sum of the min valies in each row
// /*
// Ex: sumMinArrays([
//     [1,2,3,4,5,]
//     [6,7,8,9,10]
//     [11,12,13,14,15]
// ]) 
// output -> = 18
// */

// function sumMinArrays(arr) {
//     let sumTotal = 0;

//     for(let i = 0; i < arr.length; i++) {
//         let y = arr[i][0]
//         for(let x = 0; x<arr[i].length; x++) {
//             if(y > arr[i][x]) {
//                 y = arr[i][x]
//         }
//     }
// sumTotal += y
//     }
//  return sumTotal
// }

//ES6
// const sumMinArraysNew = arr => arr.reduse((a,b) = a + Math.min(...b),0)
// console.log(sumMinArraysNew)
// ... = Spread syntax
// reduse = Array.prototype.reduce()

//Create an function that takes an array, return duplcate numbersin new array
//ArraysDuplicateNumbers([1,2,3,4,5,6,5,1]) out -> [5,1]

// //ES5


// //ES6 - inline comments here
// const ArraysDuplicateNumbers = arr => (
//     arr = [...new Set([...arr.filter(num =>
//         arr.indexOf(num) !== arr.lastIndexOf(num)   
//     )])].sort((a,b) => a -b),
//     arr.length ? arr: null
// )

// // console.log(ArraysDuplicateNumbers([1,2,3,4,3,6]))
// //Create a function that takes an array of numbers or letters and return a string
// //arrayToString([6,7,"Ali","Sonny",10]) -> ""

// function arrayToString(arr) {
//     let result = ""
//     for(let i =0; i < arr.length; i++) {
//         result = result + arr[i]
//     }
//     return result
// }
// console.log(arrayToString([6,7,"Ali","Sonny",10]))
// //Create a function that takes an array with numbers , transform that array into a mirror.
// //arrayToMirror([0,2,4,6,8]) output -> [0,2,4,6,8,6,4,2,0

// function arrayToMirror(arr) {
//     for(let i = arr.length-2; i>=0; i--) {
//         arr.push(arr[i])
//     }
//     return arr
// }
// console.log(arrayToMirror([0,2,4,6,8]))
// //ES6
// const toMirror = arr => [...arr, ...arr.reverse().slice(1)]
// console.log(toMirror([0,2,4,6,8,10]))

// //Create a function that returns the total number of arrays inside the given main array.
// //totalOfArrays([[1,2,3],[4,5,6]]) -> total number of arrays = 2
// function totalOfArrays(arr) {
//     let count = 0
//     for(let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             count++
//         }
//     }
//     return count
// }
// console.log(totalOfArrays([[1,2,3],[4,5,6], 10,[]]))
//Array is []
//Create a function that takes a number as an argrument and return an array of numbers
//counting down from the give number to zero

//Ex: arrayCountDown(5) output -> [5,4,3,2,1,0]

function arrayCountDown(num) {
    let array = []
    for(let i = num; i >=0; i--) {
        array.push(i)
    }
    return array
}

console.log(arrayCountDown(5))

//ES6
const countDownArray = (num) => Array.from(Array(num+1).keys()).reverse()
console.log(countDownArray(10))