// let a = [1,2,3,4]
// let b = ["hello", 10, 20, 30]
// let c = [...a,...b]
// console.log(...c)

// for in for of
// for in for index no
// for of for value

// index no
// for(i in a){
//     console.log(i)
// }

// // value
// for(i of a){
//     console.log(i)
// }





// for(i of a){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }
// for(i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         console.log(a[i])
//     }
// }


// let a = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10, 50, 50, 50]
// let count =0

// for (i of a) {
//     if (i == 50) {
//         count++
//     }
// }
// console.log(`yes it exists ${count} times`)

// let a = [100,2,3,4,5,6,7,800,90,10,500]

// let max = 0
// for(i=0; i<a.length ; i++){
//     if(a[i] > max){
//         max = a[i]
//     }
// }
// console.log(max)



// let a = [100,2,3,4,5,6,7,80,90,10,500]

// let max = 0
// let secmax = 0
// for(i=0; i<a.length ; i++){
//     if(a[i] > max){
//         secmax = max
//         max = a[i]

//     }
// }
// console.log(secmax)

// let a = [1,2,3,4,5]
// let sum = 0
// for(i=0;i<a.length;i++){
//     sum = sum + a[i]
// }
// console.log(sum)



let a = [1,2,3,4] 
let sum = 0
for(i in a){
    sum = sum + a[i]
}
console.log(sum)