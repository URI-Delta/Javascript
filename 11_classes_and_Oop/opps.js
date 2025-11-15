let user = {
    username :'URI',
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        // console.log('got user details from Db');
        // return 'got user details from Db'
        // console.log(`username : ${this.username}`);
        console.log(this);
        
    } 
}


console.log(user.username);
console.log(user.getUserDetails());



function User(username,loginCount,isLoggedin){
    this.username = username
    this.loginCount= loginCount
    this.isLoggedin = isLoggedin

    // return this
}

const userOne = new User('uri',12,true)
const usertwo = new User("delta",10,false)
console.log(userOne);
console.log(usertwo);