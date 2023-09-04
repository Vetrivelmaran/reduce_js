const store=[{soap:'hammam',price:20},{soap:'lifeboy',price:20}]
s= store.reduce((total,num)=>{
   return total+num.price;
},0);
console.log(s)