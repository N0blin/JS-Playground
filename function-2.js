// // Create a function that takes an array and retien types of the element (data tpys) in a new array
// //ex: arrTypes([1,2, "Ali", []]) -> ["number", "number", "string", "object"]

// function arrTypes(arr) {
//     let newArray = []
//     for(let i = 0; i<arr.length; i++){
//         newArray[i] = typeof(arr[i])
//     }
//     return newArray
// }
console.log(arrTypes)([1,2, "Ali", []])
// //ES6
const arrTypesNew = arr => arr.map(x => typeof x)
