// 1 . By using the foreach method try to print "Hello"  in front of each member of an Array

// Answer
// let Arr = [1,2,3,4]

// Arr.forEach(function(Value){
// console.log("Hello, " + Value)
// })

// 2. By Using foreach Method try to print numbers Greater then or Equal to Five Five from the given array
// Answer

// let Arr = [9,3,4,8,2,1,6,7,5,9,2,1,4,5]

// Arr.forEach(function(value){
// if (value >= 5 ){
//     console.log(value)
// }
// })

// 3 . By Using foreach Method try to print sum of the numbers in an Array
// Answer

// let arr = [1,2,3,4]
// let sum = 0
// arr.forEach(function(value){
//     sum = sum + value
// })
// console.log(sum)

// 4. By Using foreach Method try to print sum of the numbers in an Array but if a string is in the Array then skip the String

// let a = [1, 2, '3', 4]
// let sum = 0
// a.forEach(function (value) {
//     if (typeof value === "number") {
//         sum = value + sum
//     }

// })
// console.log(sum)

// 5 .Question: Given an array of numbers, use the forEach method to calculate the sum of all odd numbers in the array.
// Answer

// let a = [1,2,3,4,5,6,7,8,9]
// let sum = 0
// a.forEach(function(value){
//     if (value % 2 !== 0){
//         sum = sum + value
//     }
// })
// console.log(sum)

// 6 . Question: Use the forEach method to count how many times value 2 appears in an array. 
// Answer

// let a = [1,2,3,2,4,2,5]
// let count  = 0
// a.forEach(function(value){
//     if(value == 2){
//         count++
//     }
// })
// console.log(count)

// 7 . Question: Given an array of numbers, use the forEach method to create a new array where each number is squared.

// let a = [1, 2, 3, 4]
// let newA = []

// a.forEach(function (value) {
//     const squared = value ** 2

//     newA.push(squared)
// })
// console.log(newA) 

// 8 .Question: Use the forEach method to create an object that summarizes the counts of each unique value in an array.
// Answer   
// const colors = ['red', 'blue', 'red', 'green', 'blue', 'blue'];

// const counts = {};


// colors.forEach(function(value) {
//     if (counts[value]) {
//         counts[value]++;
//     } else {
//         counts[value] = 1;
//     }
// });
// console.log(counts);

// 9. Write a JavaScript function to calculate the sum of two numbers
// Answer

// function sumOfTwoNumbers(a,b){
// console.log(a+b)
// }
// sumOfTwoNumbers(1,5)

// 10. Write a JavaScript program to find the maximum number in an array. 

// let a = [2,3,1,4,5,6,2,4]
// let LargestNum = 0

// a.forEach(function(val){
//     if(val > LargestNum){
//         LargestNum = val 
//     }
// })
// console.log(LargestNum)

// 11 . 