// BASIC LOOPS

// 1. PRINT NUMBERS 1-10

// let num = 0
// for(i=0;i<10;i++){
//     num = num+1
//     console.log(num)
// }

// 2. SUM OF NUMBERS FROM 1-100

// let num = 0
// let sum = 0
// while(num<=100){
//     sum=sum+num
//     num++
// }   
// console.log(sum)

// 3. DOUBLE EACH VALUE OF AN ARRAY

// let arr = [1,2,3,4,5,6]
// let double=[]
// for(i=0;i<arr.length;i++){
//     double.push(arr[i]*2)
// }
// console.log(double)

// 4. GET EVEN NUMBERS from 2-20

// for(let i=2;i<=20;i+=2){
//     console.log(i)
// }

// 5. GET ALL ODD NUMBERS IN REVERSE FROM 19-1

// for(let i =19;i>=1; i-=2){
//     console.log(i)
// }

// 6.GET MULTIPLE OF 7 TILL 70 USING WHILE LOOP

// let number = 7
// while(number <= 70){
//     console.log(number)
//     number = number + 7
// }

// 7. Count Down from 10

// for(let i = 10; i>=1; i--){
//     console.log(i)
// }

// 8. PRINT SQUARE OF NUMBERS FROM 1-5

// for(let i = 1; i<=5;i++){
//     console.log(i*i)
// }

// 9. SUM OF ALL EVEN NUMBERS FROM 1-50

// let sum = 0
// for(let i = 2; i<=50;i+=2){
//     sum = sum + i
// }
// console.log(sum)

// 10. PRINT EACH CHARACTER OF A STRING

// BY FOR LOOP
// let str = "NIRMAL"
// for(i = 0; i<str.length;i++){
//     console.log(str[i])
// }

// BY FOR OF LOOP
// for(i of str){
//     console.log(i)
// }

// 11. Write a function that takes an integer and returns "odd" if the number is odd and "even" if the number is even.

// function isOddorEven(a){
//     if(a%2 == 0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }
// isOddorEven(11)

// 12. SUM OF ARRAY

// function sumArray(arr){
//     let sum = 0
//     for(i=0;i<arr.length;i++){
//         sum = sum+arr[i]
//     }
//     return sum
// }
// console.log(sumArray([1,2,3]))

// 13. FIND MINIMUM VALUE

function findmin(arr){
    let min = arr[0]
    for(i = 0; i<arr.length; i++){
        if(min>arr[i]){
            min = arr[i]
        }
    }
    return min
}
console.log(findmin([13,12,4]))