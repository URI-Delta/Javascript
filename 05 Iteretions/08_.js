// reduce 

const myNums =[1,2,3]


// let mytotal = myNums.reduce( (acc,currVal) =>{
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
    
//     return acc + currVal 
// },0 )

const mytotal = myNums.reduce( (acc,currVal) => (acc + currVal), 0)

console.log(mytotal);

const shopingCart = [
    {
        itemName:'js course',
        price :2999,
    },
      {
        itemName:'Python course',
        price :4999,
    },
      {
        itemName:'Cpp course',
        price :999,
    },
      {
        itemName:'Java course',
        price :3999,
    }, 
     {
        itemName:'Ruby course',
        price :2999,
    },
]

let PriceToPay = shopingCart.reduce( (acc, item) =>acc +item.price  ,0 )

console.log(PriceToPay);
