const user ={
    username :"URI",
    price : 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }

}

// user.welcomemessage()
// user.username = 'sam'
// user.welcomemessage()

// console.log(this);


// function chai(){
//     let username = "uri"
//     console.log(this.username);
    
// }
// chai()

const chai =() =>{
        let username = "uri"
    console.log(this);
}
// chai()


//============== Arrow Functon ===================

// const addTwo=(num1,num2)=>{
//     return num1 + num2
// }

// const addTwo=(num1,num2)=> num1 + num2


// const addTwo=(num1,num2)=> (num1 + num2)


const addTwo=(num1,num2)=> ({username:"URI"})

console.log(addTwo(5,5));
