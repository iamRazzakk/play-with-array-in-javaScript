Array literal
const arr = []
arr.push("Rakib")
arr[0] = "Rakib"
arr[4] = "Razzak"
console.log("Array length is", arr?.length, "And Value is", arr)
arr.pop()
console.log("Array length is", arr?.length, "And Value is", arr)



/**
@Title: Initial array: Constructor and Factory
*/
//
// ________________________Constructor__________________________ //

// If your need to use Array in Constructor petarn than you need to use `New` keyWord
const myArray = new Array()
myArray.push("Rakib")
const myArray2 = new Array(5)
myArray2[2] = "MD"
myArray2[3] = "Abdur"
myArray2[4] = "Razzak"
console.log(myArray, myArray2)
// ________________________Factory__________________________ //
const myArray = Array()
myArray.push("Rakib")
const myArray2 = Array(5)
myArray2[2] = "MD"
myArray2[3] = "Abdur"
myArray2[4] = "Razzak"
console.log(myArray, myArray.length, myArray2, myArray2.length)
console.log(myArray.__proto__.constructor)



// ________________________Traverse Array Elements__________________________ //

const arr = [1, 2, 3, 4, 5]

const n = arr[3]
const m = arr[2]
const x = 1, y = 0
console.log(n, m, arr[x], arr[y], arr[x + y + 1])

/**
Complex is arr[x + y + 1]. There i need index number than i got it.like x = 1, y= 0 total is 1 than + 1 total 2.2 number index is 3. 
*/

// Simple Traverse
for (let i = 0; i < arr.length; i++) {
    // console.log(i)
}
// Array sum and Avarage
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)
console.log(sum / arr.length)



// Find the large number
const arr2 = [900000000, 100, 200, 3332, 10, 105, 421, 90, 50506]
let largestNumber = arr2[0]
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > largestNumber) {
        largestNumber = arr2[i];
    }
}
// console.log(largestNumber)

// Fond Small number 
let smallestNumber = arr2[0]
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < smallestNumber) {
        smallestNumber = arr2[i]
    }
}
// console.log(smallestNumber)

// ________________________Fill Array and Update__________________________ //

const myArray3 = new Array(9)
myArray3.fill(true)
// console.log(myArray5)
for (let i = 0; i < myArray3.length; i++) {
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    // console.log(randomNumber)
    myArray3[i] = randomNumber < 5 ? "O" : "X"
}
// console.log(myArray3)
// ________________________Array of Object__________________________ //
const Friends = [
    { name: "Md Abdur Razzak", email: "rakibt23p@gmail.com", age: 20 },
    { name: "Md Sazid", email: "sazid@gmail.com", age: 23 },
    { name: "Md Minhaz", email: "minhaz@gmail.com", age: 20 },
    { name: "Md Mehraz", email: "mehraz@gmail.com", age: 20 }
]

// ________________________Array of Function__________________________ //
// Loop and call array function from array
const jug = (a, b) => a + b;
const sub = (a, b) => a - b
const times = (a, b) => a * b
const div = (a, b) => a / b
const mod = (a, b) => a % b
const func = [jug, sub, times, div, mod]
const a = 10,
    b = 20
for (let i = 0; i < func.length; i++) {
    const result = func[i](a, b)
    console.log(`[My result is ${func[i].name} Result is ${result}]`)
}
console.log(func)

// Array of Array- Multi dymentional

const pointTable = [
    [0, 0],
    [1, 2],
    [122, 100]
]

// one dymentional Traverse
for (let i = 0; i < pointTable.length; i++) {
    console.log(`Points ${i} - x = ${pointTable[i][0]} - and  y= ${pointTable[i][1]}`)
}

// Two dymentional Traverse
const numbers = [
    [0, 0, 0, 1],
    [1, 2, 3, 4],
    [122, 100, 101, 102]
]
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {

        console.log(`number = ${numbers[i][j]}`)
    }
}
