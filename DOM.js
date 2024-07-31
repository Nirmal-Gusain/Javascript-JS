                    //font size changer
let hello = document.querySelector("h1")

let small = document.querySelector(".small")
let medium = document.querySelector(".medium")
let large = document.querySelector(".large")

const smallFun = function(){
    hello.style.fontSize = "20px"
    hello.style.color="pink"
}
const mediumFun = function(){
    hello.style.fontSize = "30px"
    hello.style.color="blue"
}
const largeFun = function(){
    hello.style.fontSize = "40px"
    hello.style.color="green"
}

                    //random color generator

let box = document.querySelector(".box")
let rdm = document.querySelector(".rdm")

let redbox = function(){
    box.style.backgroundColor ="red"
}
let yellowbox = function(){
    box.style.backgroundColor ="yellow"
}
let bluebox = function(){
    box.style.backgroundColor ="blue"
}
let greenbox = function(){
    box.style.backgroundColor ="green"
}
let gamefunction = function(){
    let randomNumber = Math.random()
    if(randomNumber<0.25){
        redbox()
    }else if(randomNumber < 0.5){
        yellowbox()
    }else if(randomNumber < 0.75){
        bluebox()
    }else{
        greenbox(
            
        )
    }
    rdm.innerHTML = randomNumber
}
let btn = document.querySelector(".btn")
btn.addEventListener("click",gamefunction)



                        //Counter 

let number = document.querySelector(".numbers")
let num = 0

let add = function(){
    num= num+1
    number.innerHTML = num

}
let sub = function(){
    num= num-1
    number.innerHTML = num
}
let restart = function(){
    num = num-num
    number.innerHTML = num

}

let plus = document.querySelector(".plus")
plus.addEventListener("click", add)
let minus = document.querySelector(".minus")
minus.addEventListener("click", sub)
let reset = document.querySelector(".reset")
reset.addEventListener("click", restart)


let changetoCircle = function(){
    box.style.borderRadius = "50%"
}
let changetosquare = function(){
    box.style.borderRadius = "0px"
}

let circleButton = document.querySelector(".circle-button")
let squareButton = document.querySelector(".square-button")
circleButton.addEventListener("click",changetoCircle)
squareButton.addEventListener("click",changetosquare)