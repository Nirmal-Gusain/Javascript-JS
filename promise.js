function hello(res,rej){
    let x = "suger"
    if(x=="suger"){
        res("promise is resolved")
    }else{
        rej("promise is rejected")
    }
}
let myPromise = new Promise(hello)

myPromise.then((value)=>{
    console.log(value)
})
myPromise.catch((err)=>{
    console.log(err)
})


let store = {
    water:true,
    tealeaves:true,
    suger:true,
    milk:true
}
function tea(res,rej){
    if(store.water && store.tealeaves && store.suger && store.milk){
        res("Tea is Ready")
    }else{
        rej("Tea is not made")
    }
}
let newPromise = new Promise(tea)
newPromise.then((value)=>{
    console.log(value)
})
newPromise.catch((error)=>{
    console.log(error)
})
