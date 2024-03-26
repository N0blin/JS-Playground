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

// Use switch

function calNum3(num1, operator, num2) {
    switch(operator) {
        case('+'):
            return num1+num2
            break;
        case('-'):
            return num1-num2
            break;
        case('*'):
            return num1*num2
            break;
        case('/'):
            if(num2 === 0) return "Can not divide by 0!"
            return num1/num2
            break;
       default: return false    
       break 
    }
    
}
console.log(calNum3(2, "+", 3))
// // Re-write the code above in ES6
// const calNum2 = (num1, operator, num2, operator2, num3, operator3, num4) => operator+num2 === "/0" ? "Can not divide by 0!" :eval(num1+operator+num2+operator2+num3+operator3+num4)
// console.log(calNum2(2, "+", 3, "x", 7,"/", 8))
