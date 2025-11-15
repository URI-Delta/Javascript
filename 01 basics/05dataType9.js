// Queue First in first out 
// Stack First in last out 

// ========================   primitive data type  =======================================7

// 7 Types :
// String ,Number ,Boolean ,null ,undefined ,Symbol ,BigInt

const score = 100
const scorevalue = 100.3

const islogedIn = true
const outsudetemp = null
let useremail = undefined  // or let useremail :

const id = Symbol('123')

const anotherId = Symbol('123')


console.log(id === anotherId);

const BigNuber = 78946123013654789n


//=================================  Reference Type (Non Primitive)  ======================================

// Array ,Objects ,Functions

const heros =["shaktiman",'hanuman',"batman"];


let myobj ={
    name:"uri",
    age:20,
    uname : "uridelta"
}

const myfun =function(){
    console.log("hello world");
    
}

console.log(typeof myfun);
console.log(typeof myobj);



// ++++++++++++++++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) ,Heap (non - Primitive)

let myYoutubeName = "UriDelta"


let anotherName =myYoutubeName
anotherName = "Aviper"

console.log(myYoutubeName);
console.log(anotherName);



let userOne ={
    emai:"user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.emai="avi@gmail.com"

console.log(userOne);
console.log(userTwo);
