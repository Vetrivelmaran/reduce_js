const item =[{name:'soap',quantity:1,price:20},{name:'bresh',quantity:2,price:30},{name:'milk',quantity:3,price:40}];
val = item.reduce((acc,itm)=>{
    return acc+(itm.quantity*itm.price)
},0)
console.log(val)