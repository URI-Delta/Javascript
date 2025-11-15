class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId (){
        return Math.floor(Math.random()*1000 +1)
    }
}

let hitesh = new User('Hitesh')


hitesh.logMe()
// console.log(hitesh.createId());


class Teacher extends(User){
    constructor (username,email){
        super(username)
        this.email =email
    }
}

let iphone = new Teacher("iPhone",'i@phone.com')
iphone.logMe()
console.log(iphone.createId());