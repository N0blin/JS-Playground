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


//Create a function that takes 2-D arrarys and returns the sum of the min valies in each row
/*
Ex: sumMinArrays([
    [1,2,3,4,5,]
    [6,7,8,9,10]
    [11,12,13,14,15]
]) 
output -> = 18
*/

function sumMinArrays(arr) {
    let sumTotal = 0;

    for(let i = 0; i < arr.length; i++) {
        let y = arr[i][0]
        for(let x = 0; x<arr[i].length; x++) {
            if(y > arr[i][x]) {
                y = arr[i][x]
        }
    }
sumTotal += y
    }
 return sumTotal
}
console.log(sumMinArrays([[1,2,3,4,5,], [6,7,8,9,10], [11,12,13,14,15]]))