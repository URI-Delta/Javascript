const userEmail = []

if (userEmail) {
    console.log("got email");
    
}
else{
    console.log("don't have user email");
    
}

// flasy value
// false , 0 , -0 , BigInt 0n, "" , null ,undefined  , NaN 

// truthy value 
// true ,{},(),[],"0" , "false" ,' ', function (){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const myobj ={
    name : 'uri'
}

if (Object.keys(myobj).length===0) {
    console.log("not key found");
    
}
else{
    console.log("key found");   
}


// Nulish Coalescing operator (??) null , undefined

let  val1 ;
// val1 = 5 ?? 10

// val1 =null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15
console.log(val1);



//Terniary Operator


// condition ? true:false

const icetea =10


icetea<=80 ?console.log("less tha 80") : console.log("more than 80");

