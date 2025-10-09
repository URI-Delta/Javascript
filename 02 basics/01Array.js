// Array

const myarr =[0,1,2,4,3,5]

const myheros=["human",'batman','superman']


const myarr2 = new Array(1,2,3,4,5)

// console.log(myarr[2]);
// console.log(myheros[2]);
// console.log(myarr2.length);

// Array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(5)
// myarr.shift()


// console.log(myarr.includes(5));
// console.log(myarr.indexOf(3));


// const newarray = myarr.join()



// console.log(myarr);
// console.log(newarray);


//====== slice and Splice 


// * slice


console.log("A ",myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);

console.log("B ",myarr);

const myn2 = myarr.splice(1,3)
console.log(myn2);



console.log("C ",myarr);