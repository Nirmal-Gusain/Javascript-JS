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
