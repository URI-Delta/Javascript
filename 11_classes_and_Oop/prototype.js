// let Myname = 'Delta    '
// let MyChannel = 'URIVerse    '


// console.log(Myname.trueLength);

myheros = ['thor','spiderman']

let heropower = {
    thor : 'hammer',
    spiderman : "sling",

    getSpiderPower : function () {
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}


Array.prototype.heyHitesh = function () {
    console.log('hitesh says hello');
    
}

// heropower.hitesh()
// heropower.heyHitesh()
// myheros.hitesh()
// myheros.heyHitesh()

// inheritance

const user =     {
    name : 'chai',
    email : 'chai@google.com'
}

const teacher = {
    makeVideo : true,

}

const teachingSupport ={
    isAvailable :false
}

const TASupport ={
    makeAssignment : 'js assgnment',
    fulltime : true,

    __proto__ : teachingSupport
}

teacher.__proto__=user


// morden Syntax 

Object.setPrototypeOf(teachingSupport,teacher)

let anotherusername = 'chaiAurCode      '

String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
}

anotherusername.truelength()


'hitesh'.truelength()
'Icetea   '.truelength()