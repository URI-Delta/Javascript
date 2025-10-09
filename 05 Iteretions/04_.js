// we can use for of loop for array 
// we can use for in loop for object

const myobj ={
    js :'JavaScript',
    py :'Python',
    cpp :'C++',
    rb :'Ruby',
}

for (const key in myobj) {
//    console.log(myobj[key]);
//    console.log(`key for ${myobj[key]} is ${key}`);
}


const programing =['js','py','jsx','rb','cpp']


for (const key in programing) {
    // console.log(programing[key]);
}



const map = new Map()
map.set('IN','India')
map.set('FR','France')
map.set('DB','Dubai')
map.set('IN','India')

// for (const key in map) {
//     console.log(key);
//     console.log(map[key]);
// }