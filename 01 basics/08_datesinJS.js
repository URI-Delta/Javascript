// Dates 

let mydate =new Date()

// console.log(mydate.toString());

// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

// console.log(mydate.toUTCString());

// console.log(typeof(mydate));


// let mycreated_date = new Date(2023,0,23)
// let mycreated_date = new Date(2005,2,5,5,6)

// let mycreated_date = new Date("2023-01-14")
let mycreated_date = new Date("01-14-2023")

// console.log(mycreated_date.toLocaleString());

let my_timeStamp = Date.now()
// console.log((my_timeStamp));

// console.log((mycreated_date.getTime()));
// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);
console.log(newDate.getDay());



// console.log(    `${newDate.getDate()}`);


newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(newDate);
