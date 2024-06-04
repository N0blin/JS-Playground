// Create a function that takes an array of stringified numbers as a parameter and the return of numbers
//Ex : ["1", "3", "6.7"] -> [1, 3, 6.7]
// i dont understand
// let arrayToNumbers = arr => arr.map(e => +e)
// console.log(arrayToNumer(["1", "3", "6.7"]))


function destringify(arr) {
    let temp = []
    for(let i = 0; i< arr.length; i++){
        temp[i] = JSON.parse(arr[i])
    }
    return temp
}

//Create a function that returns (true) if all parameters are truthy and false otherwise
//Ex. checkParam(true, true, true) -> true
// checkParam(5,1,3, 0) -> false
//Fasy values are:false, 0 and ""

// //ES6
// const checkParam = (...args) => args.every(Boolean)
// console.log(checkParam(5,1,3,2))
// //ES5
// function checkParam(arr) {
//     let value = false
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !==0 && arr[i] !== false && arr[i] !== "") {
//             value = true
//         }
//     }
//     return value
// }

// //ES5
// function checkParam2(param1, param2, param3, param4){
//     if(param1 && param2 && param3 && param4) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkParam2(5,7,4,3,0))

// // Create a function to check if an array contains a particular integer
// // Ex: checkArray([5,6,6], 5) -> true
// // Ex: checkArray([1,3,4,7,10], 2) -> false

// function checkArray(arr, num) {
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i] == num) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   console.log(checkArray([5, 6, 6], 7));
  
//   const checkArray2 = (arr, num) => {
//     return arr.includes(num);
//   };
  
//   console.log(checkArray2([5, 6, 6], 2));

function checkArray3 (arr, x) {
    for(let i =0; i < arr.length; i++) {
        if(arr[i] == x) {
            return true 
        } 
        }
    return false
    }
console.log(checkArray3([5,5,6]))