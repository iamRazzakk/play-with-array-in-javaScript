// Array literal 
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