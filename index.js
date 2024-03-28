// Create a function that takes an array of stringified numbers as a parameter and the return of numbers
//Ex : ["1", "3", "6.7"] -> [1, 3, 6.7]

//let arrayToNumbers = arr => arr.map(e => +e)
// console.log(arrayToNumer(["1", "3", "6.7"]))
function destringify(arr) {
    let temp = []
    for(let i = 0; i< arr.length; i++){
        temp[i] = JSON.parse(arr[i])
    }
    return temp
}