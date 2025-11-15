// const promiseOne = new Promise(function (resolve , reject){
//     // Do an async task
//     // DB calls , cryptography , networkcall
//     setTimeout(()=>{
//         console.log('Async task is complete');
//         resolve()        
//     },1000)
// })


// promiseOne.then(()=>{
//     console.log('promise consumed');
    
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('async task two');
//         resolve()
        
//     },2000)
// }).then(()=>{
//     console.log('async two resolve');
    
// })


const promisethree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: 'chai', email:'chai@gmail.com'})
    },1000)
})

promisethree.then((user)=>{
    console.log(user);
    
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error  =true
        if (!error){
            resolve({username : 'chai',password: 123456})
        }else{
            reject('Error: somthing went wrong')
        }
    },1000)   
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{

    console.log(username);
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>console.log('the promise either resolved or rejected'))

const promiseFive  = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error  =true
        if (!error){
            resolve({username : 'Javascript',password: 123456})
        }else{
            reject('Error: Js went wrong')
        }
    },1000)   
})


async function consumePromFive() {
    try{
            let response = await promiseFive
    console.log(response);
    }catch (error){
        console.log(error);
        
    }
    
}
consumePromFive()


// async function getAlllUsers() {
//     try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log( 'E' ,error);
        
//     }
    
// }

// getAlllUsers()

// fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json()
}).then(
    (data)=>{
        console.log(data);
        
    }
)
.catch(
    (error)=>{
        error
    }
)