const marvelHeros = ['thor','ironman','spiderman']
const DCHeros = ['superman','Batman','flash']

// marvelHeros.push(DCHeros)


// console.log(marvelHeros.length);
// console.log(marvelHeros[3][1]);



// const allheros = marvelHeros.concat(DCHeros)
// console.log(allheros);


// Spread 
const all_new_heros = [...marvelHeros, ...DCHeros]

// console.log(all_new_heros);

const anothrarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let real_another_array = anothrarray.flat(Infinity)

console.log(real_another_array);


// console.log(Array.isArray("delta"))
console.log(Array.from("delta"))

console.log(Array.from({name:'delta'}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
