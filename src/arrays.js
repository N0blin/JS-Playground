//!SECTION - Javascript Arrays

//NOTE - Arrays are a special type of objects that can be accessed through numbers from zero up to N-1
let arr = []

arr = ['Noah', 1, 'Food', 100]
// console.log(arr[2])

//NOTE - push()  pop()
//SECTION - push () adding a mew item to the end of an array.
arr.push('Joe')
// console.log(arr)

//SECTION - pop() removes an item from the end of the array.

let LastItem = arr.pop()
// console.log(LastItem)
// console.log(arr)


//ANCHOR - JavaScript For loop, the best way to iterate any array mathmatically through a for loop
// console.log(arr.length)
for (let i = 0; i < arr.length; i++){
// console.log(i, arr[i])
}

//SECTION - add an item the begining of an array
arr.unshift('apples')
// console.log(arr)

//NOTE - Remove an item from the beginning of an array.
let FirstItem = arr.shift()
// console.log(FirstItem)
// console.log(arr)

//ANCHOR - JavaScript Iterators
let a = [-5, -4, -3]
let b = 0
let c = [12, 13, 14]

//NOTE - concat() method which is used to join two or more arrays
let result = a.concat(b, c)
// console.log(result)

let numbers =[2,4,7,8,9]

let isEven = (num) => {
    if(num % 2 == 0) {
    //    console.log(num + ' is even number')
    return
    } else {
    //    console.log(num + ' is odd number')
    return 
    }
}

// console.log(isEven(numbers))
//
// console.log(numbers.every(isEven))

// console.log(numbers.some(isEven))


for(let j = 0; j < numbers.length; j++) {
let temp = numbers[j]
if ( temp % 2 == 0) {
console.log(temp + ' is even number')
} else {
console.log(temp + ' is odd number')
}}