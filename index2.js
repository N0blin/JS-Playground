// // Create a function that takes two numbers and a operator (+,-,/,*) and will preform a calculation
// // with the give numbers.
// //calNum(2, "+", 3) the output is 5

// function calNum(num1, operator, num2) {
//     if(operator == '+') return num1+num2
//     if(operator == '-') return num1-num2
//     if(operator == '*') return num1*num2
//     if(operator == '/' && num2 !=0) return num1/num2
//     else return "Can not divide by 0!"
// }

// // Use switch

// function calNum3(num1, operator, num2) {
//     switch(operator) {
//         case('+'):
//             return num1+num2
//             break;
//         case('-'):
//             return num1-num2
//             break;
//         case('*'):
//             return num1*num2
//             break;
//         case('/'):
//             if(num2 === 0) return "Can not divide by 0!"
//             return num1/num2
//             break;
//        default: return false    
//        break;
//     }
    
// }
// console.log(calNum3(2, "+", 3))
// // Re-write the code above in ES6
// const calNum2 = (num1, operator, num2, operator2, num3, operator3, num4) => operator+num2 === "/0" ? "Can not divide by 0!" :eval(num1+operator+num2+operator2+num3+operator3+num4)
// console.log(calNum2(2, "+", 3, "x", 7,"/", 8))

// // Create an array that rotate the values clockwise by one
// // The last value is going to be the last value
// //rotateArray([20, 15, 26 ,22, 30]) -> [30, 20, 15 26,22]
// function rotateArray(arr) {
//     let LastValue = arr.pop()
//     arr.unshift(LastValue)
//     return arr
// }
// console.log(rotateArray([20, 15, 26 ,22, 30]))

// const rotateArray2 = arr => (arr.unshift(arr.pop()
// // Create a function that takes a given date ("3/26/2024") return the day of the  week
// // as a string assume that the week starts on sunday.
// function getDayName(day) {
//     const days = ['Sunday', 'Monday', 'Teuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     let date = new Date()
//     return days[date.getDay()]
// }
// console.log(getDayName(3/16/2024))
// // ES6
// const getDayNameTwo = day => new Date(day).toLocaleDateString('en-us', {weekday: 'long'})
// console.log(getDayNameTwo("2024-03-26"))

// // Create a function that can take a flat array and change it to a nest arrays to represent a incremental depth level.


// //Ex nestArray([1,2,6,3]) -> [1[2[6[3]]]]

// function nestArray(arr) {
//     if(arr.length == 1) return arr
//     let temp = []
//     for(let i =0; i < arr.length; i++) temp.push(arr[i])
//     return [arr[0], nestArray(temp)]
// }
// // console.log(nestArray([1,2,6,3]))
// const nestArray2 = arr => arr.length === 1 ? arr : [arr[0], nestArray2(arr.slice(1))]
// console.log(nestArray2([1,2, 3]))

//Create a function that takes two dates and return the number of days between the first and second dadte
/* getNumbers(
    new Date("March 26 2024")
    new Date("March 30 2024")

    ) */

    //output -> 4days
    // ES6 (provide inline commets for the code)
   const getDays = (date1, date2) => {
        return new Date(date2 - date1).getDate() -1
}
console.log(getDays(
    new Date("March 26 2024"),
    new Date("March 30 2024")
))