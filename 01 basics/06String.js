const name = "Delta "
const repocount = 50

console.log(name + repocount +"value");
 

console.log(`hello my name is ${name} and my repo count is ${repocount}`);


const gamename =new String('delta-Uri-avi')

console.log(gamename[0]);
console.log(gamename.__proto__);



console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));

console.log((gamename.indexOf('t')));


const newStr=gamename.substring(0,4)
console.log(newStr);

const anoterStr =gamename.slice(-8,4)
console.log((anoterStr));

const TrimStr = "    Uri   "
console.log(TrimStr);
console.log(TrimStr.trim());

const url ='htps://google.com/new%20youtube'

console.log(  url.replace('%20','-'));

console.log(url.includes('new'));

console.log(gamename.split('-',2));
