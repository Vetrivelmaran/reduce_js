// Write a function that takes an array of numbers and returns the product of all the
// numbers. Use the reduce method to accomplish this.

 const a=[23,42,53,321,1]
let s =a.reduce((a,b)=>{
    return a*b
},1);
console.log(s)