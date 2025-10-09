// object singelton

// const tinderUser = new Object()  // singelton object 
const tinderUser = {}  // object litarels

// console.log(tinderUser);


tinderUser.id ="123"
tinderUser.name ="URI"
tinderUser.IsLoggedIn = false



// console.log(tinderUser);


const regularUser ={
    Email :'URI@gmail.com',
    fullname :{
        Fname: "Delta",
        Lname:"URI"
    },

}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.Lname);


const obj1 ={
    1 : "a",
    2:"b"
}

const obj2 ={
    3 : "c",
    4:"d"
}


const obj3 ={
    5 : "e",
    6:"f"
}

// const obj3 = {obj1,obj2}

// const obj4=Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1,...obj2,...obj3}

// console.log(obj4);

const user = [
    {id:1,
        email:'h@gmail.com'

    },{id:2,
        email:'hello@gmail.com'

    }
]

// console.log(user[1].id);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

// Destructuring Object 
const course = {
    name:"jsinHindi", 
    fees:999,
    courseInstructor:"Hitesh"
}

const{courseInstructor:instructor}=course
console.log(instructor);


