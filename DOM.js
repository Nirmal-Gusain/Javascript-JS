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