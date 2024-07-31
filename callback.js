                            // CALLBACK FUNCTION

// function hello(a){
//     console.log(a)
//     console.log("hello1")
// }
// function fun(b){
//     console.log(b)
//     console.log("fun1")
// }
// fun(hello(5))

                            // MAP FUNCTION


// let ar = [1,2,3,4,5]
// const double=function(a){
//     console.log(a**3)
// }
// ar.map(double)


// let arr = [2,4,6,8,10]
// // let square = function(a){
// //     console.log(a*a)
// // }
// // square(5)


// arr.map(square)
// let sq= arr.map((a)=>{
//     return a*a
// })

                        // UPPER CASE THE GIVEN ARRAY

// let arr = ["rahul","sumit","rohan"]
// let upper =arr.map((a)=>a.toUpperCase())
// console.log(upper)

                        // DOUBLE THE NUMBER IN ARRAY

// let ar = [1,2,3,4,5]

// ar.map((a)=>{
//     console.log(a*a)
// })

                        // double the number if greater than 25

// let arr = [10,20,30,40,50]
// let newarr = arr.map((a)=>{
//     if(a>20){
//         return a*2
//     }else{
//         return a
//     }
// })
// console.log(newarr)

                        // FIND THE EVEN NUMBER

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let even = arr.map((a)=>{
//     if(a%2==0){
//         console.log(a) 
//     }
// })


                        // FIND HIGHEST NUMBER 

// let arr = [50,2,40,10,8,3]
// let max = 0
// arr.map((a)=>{
//     if(a>max){
//         max=a
//     }
// })
// console.log(max)

                        // PRINT THE GIVEN ARRAY

// let arr=[1,2,3,4,5,6]
// let array = arr.map((a)=>{
//     return a
// })
// console.log(array)

                        // PRINT NUMBERS GREATER THAN 50

// let arr = [10,20,30,40,50,60,70,80,90]

// let array = arr.map((a)=>{
//     if(a>50){
//         return a
//     }
// })
// console.log(array)

                        // PRINT FIRST NAME OF THE FOLLOWING DATA

// const person=[{
//     "id": 1,
//     "first_name": "Nickie",
//     "last_name": "Southorn",
//     "email": "nsouthorn0@t.co",
//     "gender": "Male",
//     "phone": "+86 988 458 8839"
//   }, {
//     "id": 2,
//     "first_name": "Priya",
//     "last_name": "Guyet",
//     "email": "pguyet1@psu.edu",
//     "gender": "Male",
//     "phone": "+225 201 122 8186"
//   }, {
//     "id": 3,
//     "first_name": "Neda",
//     "last_name": "Chapell",
//     "email": "nchapell2@chicagotribune.com",
//     "gender": "Female",
//     "phone": "+55 296 146 2266"
//   }, {
//     "id": 4,
//     "first_name": "Dewie",
//     "last_name": "Argontt",
//     "email": "dargontt3@umich.edu",
//     "gender": "Male",
//     "phone": "+62 933 617 6542" 
//   }, {
//     "id": 5,
//     "first_name": "Cloe",
//     "last_name": "Oakshott",
//     "email": "coakshott4@about.me",
//     "gender": "Female",
//     "phone": "+1 864 342 0870"
//   }]

// person.map((a)=>{
//     console.log(a.first_name)
// })


                      //filter

// let arr = [1,2,3,4,5,6,7,8,9]
// let even = arr.filter((a) => a % 2 == 0)
// console.log(even)

                    //Reduce

let arr = [1,2,3,4,5,6]
let sum = arr.reduce((a,b) =>{
  return a+b
})
console.log(sum) 