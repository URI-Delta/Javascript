// if statement

// const isUserLogged =true

// const temp =61 

// if (temp < 50){   
//     console.log("temp is lower than 50");
    
// }else{
//    console.log("temp is greater than 50");
// }

// console.log("executeds");

// < ,> ,<= ,>= ,== ,!=,=== !==


const score =200

if (score <100){
    const power ="fly"
    console.log(`user Power ${power}`);
}
// console.log(`user Power ${power}`);

const balance =1000

// if (balance >500) console.log("test") , console.log("test2");

// if (balance < 500) {
//     console.log("less than 500 ");
// }else if (balance <750){
//     console.log("less than 750 ");
// }else if (balance < 900) {
//     console.log("less than 900 ");
// }
// else{
//     console.log("less than 1200 ");
// }

const userLoggedIn =true
const debit_card =true
const LoggedInFrom_google =false
const loggedInFrom_Email = true

if (userLoggedIn && debit_card) {
    console.log("Allow to buy Courses");   
}

if (LoggedInFrom_google || loggedInFrom_Email) {
    console.log("user logged in"); 
    
}