// // ES6

// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeusername (){
//         return `${this.username.toUpperCase()}`
//     }
// }

// let chai = new  User('chaiaurcode','chai@gamil.com','0414')

// console.log(chai.encryptPassword());
// console.log(chai.changeusername());



// behind the scene 
function User(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
    
}

User.prototype.encryptPassword = function () {
    return    `${this.password}abc`
}


User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

let tea = new  User('teaaurcode','tea@gamil.com','0414')

console.log(tea.encryptPassword());
console.log(tea.changeusername());
