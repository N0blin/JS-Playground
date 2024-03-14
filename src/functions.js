// function greeting() {
// return console.log('Hello World!')
// }

// console.log(greeting())

// //NOTE - Write a function that adds any two numbers and returns the result
// function sum(a,b) {
// return a+b
// }

// console.log(sum(2,3))
// //Write function takes an array check whether the sum of the elements is
// //even or odd, the value should return "even" or "odd"

// function checkArraySum(arr) {
//     let sum = 0
//     for(i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//    console.log(sum)
    
//     if(sum%2 == 0 ) {
//         return 'even'
//     } else {
//         return 'odd'
//     }

// }

// console.log(checkArraySum([0, 1, 5,]))

// //SECTION - Write a function that an array of items and returns only intergers
// //['Noah', 3, 'Nathaniel, 5, 9] -> [3, 5, 9]

// function onlyInterger(arr) {
// let interger = []
//     for (let i = 0; i < arr.length; i++){
//     if(Number.isInteger(arr[i])){
//     interger.push(arr[i])
//     }
//     }
//     return interger

// }

// console.log(onlyInterger(['N0ah', 3, 'Nathaniel', 5 ,9]))

// //SECTION - Write a function that takes an array with numbers and return and array with the elements multiplied by 2
// //arrayByTwo([2,5,4]) -> [4,10,8]

// function arrayByTwo(arr) {
//     for (let i = 0; i < arr.length; i++){
//     arr[i] *= 2
//     }
//     return arr
// }

// console.log(arrayByTwo([2,5,4]))
// One line
//const oneLineArray = (arr) => arr.map(el => el * 2)

// console.log(oneLineArray([2,5,4]))



//Create a function which takes two strings (p1 and p2) as arguments and returns a string
//stating the winner (Rock, Paper, Scissors)

//NOTE - Game Condition
// if p1 wins return the string "The winner is P1"
// if p2 wins return the string "The winner is P2"
// if they are the same then return "It's a draw"

function rps(p1, p2) {
    if(p1 === p2) return `It's a draw`

    else if(p1 === 'Rock' && p2 === 'Scissors') return 'The winner is P1';
    else if (p1 === 'Paper' && p2 === 'Rock') return 'The winner is P1';
    else if(p1 === 'Scissors' && p2 === 'Paper') return 'The winner is P1';

    else return 'The winner is P2'
}

// console.log(rps('Rock', 'Scissors'))


//ANCHOR - ES6 JavaScript built in functions.
function rpsTwo(p1, p2) {

    let obj = {
        Rock: 'Scissors',
        Scissors: 'Paper',
        Paper: 'Rock'
    }
    return p1 === p2 ? "Its a draw" : obj[p1] === p2 ? " The winner is p1" : "The winner is p2"
}

//ANCHOR - JS built in function inculdes()
function rps(p1, p2) {
    const wins = ['RockScissors', 'PaperRock', 'ScissorPaper']
/*

*/
    return p1 === p2 ? 'Its a draw' : `The winner is ${wins.includes(p1 + p2)} ? 'p1' : 'p2'`
}
