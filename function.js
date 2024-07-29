// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// functions
// declarative function
// expression function
// Arrow function


// declarative function
// function greet(){
//     console.log("hello")
//     console.log("hiee")
//     console.log("Bye")
// }
// greet()


// expression function
// const greet = function(){
//     console.log("hello")
//     console.log("hiee")
//     console.log("Bye")
// }
// greet()



// Arrow function
// const greet = () => {
//     console.log("hello")
//     console.log("hiee")
//     console.log("Bye")
// }
// greet()


// parametrized
// const greet = (a,b,c) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// greet("hello","Good Morning","Bye")




// take two numbers and add them
// function sum(a,b){
//     console.log(a+b)
// }
// sum(10,10)

// 

// function marks_calculator(a,b,c,d){
//     if(a<33 || b<33 || c<33 || d<33){
//         return "sorry you are fail"
//     }else if(a>100 || b>100 || c>100 || d>100){
//         return "invaild marks"
//     }else{
//         let avg = (a+b+c+d)/4
//         if(avg > 90){
//             return "pass with A+ grade"
//         }else{
//             return "pass"
//         }
//     }
// }
// console.log(marks_calculator(34,40,50,60))


// function greatest(a){
//     let max = 0
//     for(i=0; i<a.length;i++){
//         if(a[i]>max){
//             max = a[i]
//         }
//     }
//     return max
// }
// console.log(greatest([1000,30,200]))


// function repeated (a){
//     let repeat = 0
//     for(i of a){
//         if(i == 10){
//             repeat++
//             console.log(`yes it exist and ${repeat}`)
//         }else{
//             console.log("no does not exist")
//         }
//     }

// }
// repeated([10,20,10,30,10])

// function repeated(a) {
//     let repeat = 0;
//     for (i of a) {
//         if (i == 10) {
//             repeat++;
//         }
//     }

//     if (repeat > 0) {
//         console.log(`yes it exists and repeats ${repeat} times`);
//     } else {
//         console.log("no it does not exist");
//     }
// }

// repeated([10, 20, 10, 30, 10]);

                        // ARMSTRONG NUMBER
// An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits in the number.

function isArmstrongNumber(a){
    let sum = 0
    let originalNumber = a
    while(a>0){
        let lastDigit = a%10
        sum = sum+(lastDigit*lastDigit*lastDigit)
        a = parseInt(a/10)
    }
    if (sum === originalNumber) {
        console.log("is an Armstrong number");
    } else {
        console.log("is not an Armstrong number");
    }
    
}
isArmstrongNumber(370)


