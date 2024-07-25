// let person ={
//     name:"Nirmal",
//     age:20,
//     gender:"male",
//     address:"delhi"
// }
// person.phone = 321456987
// // console.log(person.phone)

// for(let key in person){
//     console.log(person[key])
// }

                            // destructuring in object

// let person = {
//     name:"nirmal",
//     age:20,
//     gender:"male",
//     address:"Delhi",
//     IsMarried:false,
//     phone:963258741
// }
// let{age,gender , phone} = person
// console.log(gender)


// let person = [{
//     "first_name": "Verena",
//     "last_name": "Jancey",
//     "email": "vjancey0@sohu.com",
//     "gender": "Female",
//     "ip_address": "41.217.94.133"
//   }, {
//     "first_name": "Kellen",
//     "last_name": "Bradock",
//     "email": "kbradock1@patch.com",
//     "gender": "Female",
//     "ip_address": "51.80.101.243"
//   }, {
//     "first_name": "Verge",
//     "last_name": "Sooley",
//     "email": "vsooley2@cisco.com",
//     "gender": "Agender",
//     "ip_address": "77.211.226.126"
//   }, {
//     "first_name": "Emmye",
//     "last_name": "Feavearyear",
//     "email": "efeavearyear3@cdc.gov",
//     "gender": "Female",
//     "ip_address": "116.1.88.141"
//   }, {
//     "first_name": "Jessamine",
//     "last_name": "Kick",
//     "email": "jkick4@furl.net",
//     "gender": "Female",
//     "ip_address": "18.245.72.142"
//   }] 

//   let [{first_name},{last_name},{email},{gender},{ip_address}] = person
//   console.log(first_name)


                                        //   sets
let arr = [1,1,2,3,3,4,5,5,6]
const set = new Set(arr)
console.log(set)
if(set.has(4)){
    console.log("yes") 
}else{
    console.log("no")
}