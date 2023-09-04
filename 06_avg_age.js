const person=[{name:'vetri',age:21},{nmae:'bharu',age:21},{name:'david',age:22}];
avg=person.reduce((acc,age_val)=>{ return acc+age_val.age/person.length},0)
console.log(avg)