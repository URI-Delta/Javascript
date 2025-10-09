const coding =['javaScript','java','cpp','ruby','python']

// coding.forEach(
//     function (val) {
//     console.log(val);
     
//     }
// )

// coding.forEach(
//     (val ) =>{console.log(val); }
// )


// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)

    
// coding.forEach( (item,index,arr) =>{
//     console.log(index,item,arr);
    
// } )


const mycoding =[
    {
        languageName: 'javascript',
        fileName:'js'
    },
    {
        languageName: 'Python',
        fileName:'py'
    },
    {
        languageName: 'Ruby',
        fileName:'rb'
    },
]

mycoding.forEach(
    (item) =>{console.log(item.languageName)}
)