const MyNumbers =[1,2,3,4,5,6,7,8,9,10]


// const newNums = MyNumbers.map( (num)=> num + 10 )

// console.log(newNums);

//--------------------

// let newArr = []

// MyNumbers.forEach( (num)=>{
//     newArr.push(num + 10)
// } )

// console.log(newArr);

const newNums = MyNumbers.map( (num)=> num *10 ).map( (num)=>num + 1 ).filter( (num)=>num >40 )

console.log(newNums);


