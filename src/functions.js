function greeting() {
return console.log('Hello World!')
}

// console.log(greeting())

//NOTE - Write a function that adds any two numbers and returns the result
function sum(a,b) {
return a+b
}

// console.log(sum(2,3))
//Write function takes an array check whether the sum of the elements is
//even or odd, the value should return "even" or "odd"

function checkArraySum(arr) {
    let sum = 0
    for(i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
    
    if(sum%2 == 0 ) {
        return 'even'
    } else {
        return 'odd'
    }

}

console.log(checkArraySum([0, 1, 5,]))

//SECTION - Write a function that an array of items and returns only intergers
//['Noah', 3, 'Nathaniel, 5, 9] -> [3, 5, 9]

function onlyInterger(arr) {
let interger = []
    for (let i = 0; i < arr.length; i++){
    if(Number.isInteger(arr[i])){
    interger.push(arr[i])
    }
    }
    return interger

}

console.log(onlyInterger(['N0ah', 3, 'Nathaniel', 5 ,9]))