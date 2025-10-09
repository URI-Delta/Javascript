//singleton
Object.create  //creating object through constructor



// object literals 

const MySym=Symbol("key1")


const Jsuser = {
    name:"delta",
    "full name ": "uri Delta",
    [MySym]: 'mykey1',
    age:20,
    location :'Pune',
    email :'uri@gmail.com',
    IsLoggedIn : true,
    LastLoggedInDay:['Monday',"Saturday",'Wednesday'],
}


// console.log(Jsuser.name);
// console.log(Jsuser['email']);
// console.log(Jsuser["full name "]);
// console.log(Jsuser[MySym]);


// Jsuser.email ="uri@chat.com"
// console.log(Jsuser);

// Object.freeze(Jsuser)

// Jsuser.email ="delta@chat.com"
// console.log(Jsuser);


Jsuser.greeting = function () {
    console.log("Hello Js Users");
    
}

Jsuser.greetingTwo = function () {
    console.log(`hello js User ,${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
