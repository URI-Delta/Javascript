class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);   
    }
}

class Teacher extends(User){
    constructor(username,email,password){
        super(username)
        this.email =email
        this.password = password
    }

    addCouser(){
        console.log(`A new couser was added my ${this.username}`);
        
    }
}

let chai = new Teacher('chai','chai@gmail.com','123')

chai.addCouser()
chai.logMe()


let masalachai = new User('masalachai')
// masalachai.addCouser()
masalachai.logMe()

console.log(chai instanceof User);
