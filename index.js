// Array literal
// const arr = []
// arr.push("Rakib")
// arr[0] = "Rakib"
// arr[4] = "Razzak"
// console.log("Array length is", arr?.length, "And Value is", arr)
// arr.pop()
// console.log("Array length is", arr?.length, "And Value is", arr)



/**
@Title: Initial array: Constructor and Factory
*/
//
// ________________________Constructor__________________________ //

// If your need to use Array in Constructor petarn than you need to use `New` keyWord
// const myArray = new Array()
// myArray.push("Rakib")
// const myArray2 = new Array(5)
// myArray2[2] = "MD"
// myArray2[3] = "Abdur"
// myArray2[4] = "Razzak"
// console.log(myArray, myArray2)
// ________________________Factory__________________________ //
// const myArray = Array()
// myArray.push("Rakib")
// const myArray2 = Array(5)
// myArray2[2] = "MD"
// myArray2[3] = "Abdur"
// myArray2[4] = "Razzak"
// console.log(myArray, myArray.length, myArray2, myArray2.length)
// console.log(myArray.__proto__.constructor)



// ________________________Traverse Array Elements__________________________ //

// const arr = [1, 2, 3, 4, 5]

// const n = arr[3]
// const m = arr[2]
// const x = 1, y = 0
// console.log(n, m, arr[x], arr[y], arr[x + y + 1])

/**
Complex is arr[x + y + 1]. There i need index number than i got it.like x = 1, y= 0 total is 1 than + 1 total 2.2 number index is 3.
*/

// Simple Traverse
// for (let i = 0; i < arr.length; i++) {
// console.log(i)
// }
// Array sum and Avarage
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum)
// console.log(sum / arr.length)



// Find the large number
// const arr2 = [900000000, 100, 200, 3332, 10, 105, 421, 90, 50506]
// let largestNumber = arr2[0]
// for (let i = 1; i < arr2.length; i++) {
//     if (arr2[i] > largestNumber) {
//         largestNumber = arr2[i];
//     }
// }
// console.log(largestNumber)

// Fond Small number
// let smallestNumber = arr2[0]
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < smallestNumber) {
//         smallestNumber = arr2[i]
//     }
// }
// console.log(smallestNumber)

// ________________________Fill Array and Update__________________________ //

// const myArray3 = new Array(9)
// myArray3.fill(true)
// // console.log(myArray5)
// for (let i = 0; i < myArray3.length; i++) {
//     const randomNumber = Math.floor(Math.random() * 10 + 1)
//     // console.log(randomNumber)
//     myArray3[i] = randomNumber < 5 ? "O" : "X"
// }
// console.log(myArray3)
// ________________________Array of Object__________________________ //
// const Friends = [
//     { name: "Md Abdur Razzak", email: "rakibt23p@gmail.com", age: 20 },
//     { name: "Md Sazid", email: "sazid@gmail.com", age: 23 },
//     { name: "Md Minhaz", email: "minhaz@gmail.com", age: 20 },
//     { name: "Md Mehraz", email: "mehraz@gmail.com", age: 20 }
// ]

// ________________________Array of Function__________________________ //
// Loop and call array function from array
// const jug = (a, b) => a + b;
// const sub = (a, b) => a - b
// const times = (a, b) => a * b
// const div = (a, b) => a / b
// const mod = (a, b) => a % b
// const func = [jug, sub, times, div, mod]
// const a = 10,
//     b = 20
// for (let i = 0; i < func.length; i++) {
//     const result = func[i](a, b)
//     console.log(`[My result is ${func[i].name} Result is ${result}]`)
// }
// console.log(func)

// Array of Array- Multi dymentional

// const pointTable = [
//     [0, 0],
//     [1, 2],
//     [122, 100]
// ]

// one dymentional Traverse
// for (let i = 0; i < pointTable.length; i++) {
//     console.log(`Points ${i} - x = ${pointTable[i][0]} - and  y= ${pointTable[i][1]}`)
// }

// Two dymentional Traverse
// const numbers = [
//     [0, 0, 0, 1],
//     [1, 2, 3, 4],
//     [122, 100, 101, 102]
// ]
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers[i].length; j++) {

//         console.log(`number = ${numbers[i][j]}`)
//     }
// }
// ________________________Add New Element__________________________ //
// Use push to insert at the end
// const myArray = [1, 3, 4, 5, 6]
// myArray.push(7)
// myArray.push(8)
// console.log(myArray)
// const myArray2 = [9, 10, 11]
// myArray.push(...myArray2)
// console.log(myArray)
// Array.prototype.push.apply(myArray, myArray2)
// console.log(myArray)

// Use unshipt to insert at the begening
// const array1 = [7, 8, 9]
// array1.unshift(6)
// const array2 = [3, 4, 5]
// array1.unshift(...array2)
// Array.prototype.unshift.apply(array1, array2)
// console.log(array1)


// use Splice to insert at the given index
// const arrS1 = [1, 2, 3, 4, 5, 7, 8]
// arrS1.splice(5, 0, 6)
// const arrS2 = [9, 10]
// arrS1.splice(8, 0, ...arrS2)
// console.log(arrS1)
// ________________________Update an Existence Element__________________________ //
// easy away
// const myArray = [1, 2, 3, 47, 5]
// myArray[3] = 4
// console.log(myArray)
// update an array like object
// const person = [
//     {
//         "id": 1,
//         "name": "John Doe",
//         "age": 30,
//         "email": "john.doe@example.com",

//     },
//     {
//         "id": 2,
//         "name": "Jane Smith",
//         "age": 25,
//         "email": "jane.smith@example.com",

//     },
//     {
//         "id": 3,
//         "name": "Michael Johnson",
//         "age": 35,
//         "email": "michael.johnson@example.com",
//     }
// ]
// giverId = 2
// name = "MD Abdur Razzak"
// myAge = 23
// id = 1
// for (let i = 0; i < person.length; i++) {
//     if (giverId === person[i].id) {
//         person[i].name = name
//         person[i].age = myAge
//         person[i].id = id
//         break
//     }
// }
// console.log(person)

// ________________________Delete specipic Element__________________________ //
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// remove first element
// number.pop()
// number.length = number.length - 1
// number.splice(3, 4)

// remove inside element using value;
const myNumber = 5
for (let i = 0; i < number.length; i++) {
    if (myNumber === number[i]) {
        number.splice(number[i, 5])
    }

}


console.log(number)