//var c =300


let a= 300

if (true) {
    let a= 10
    const b = 20
    // console.log(a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);


// newsted scope 

function one(){
    const username ="URI"

    function two(){
        const website ="youtube"
        console.log(username);        
    }
    // console.log(website);
 
    two()

}
// one()

if (true) {
    const username ='URI'
    if (username=== 'URI') {
        const website="youtube"
        // console.log(`the ${username} is searching for ${website} website`);
    }
}


// ++++++++++++++++ intersting ++++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num + 1
}


const addTwo = function(num){
    return num +2
}

console.log(addTwo(5));