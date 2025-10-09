function SyMyName(){
console.log('u');
console.log('r');
console.log('i');

}

// SyMyName()


// function addition(number1,number2){
//     console.log(number1 + number2);
    
// }

function addition(number1,number2){
    return number1 + number2
    
    // let reesult= number1 + number2
    // return reesult
    
}

const reesult =addition(3,8)


// console.log('result :',reesult);  

function loginuser(username = "sam"){
    // if(username === undefined){
    if(!username ){
        console.log("Please enter a user name");
        return 
        
    }
    return `${username} Just logged In `
}

// console.log(loginuser());

function calculateCardPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCardPrice(200,400,600,800,2000));


const user ={
    name : "URI",
    price :199,
}

function handelObject(anyobject){
    // console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`);
    
}

handelObject(user)
handelObject({
    name : 'avi',
    price :399
})


// const myNewArray=[200,400,600,100]

function returnSeconValue(getArray){
    return getArray[2]
}

// console.log(returnSeconValue(myNewArray));
