// Write a function that takes an array of objects with a name and salary property
// and returns the total salary of all the employees. Use the reduce method to
// accomplish this.

const employees =[{name:'vetri',salary:15000},{name:'david',salary:2000000},{name:'santhosh',salary:2300000}]
avg_sal =employees.reduce((acc,{salary})=>{
return acc+salary/employees.length
},0)
console.log(avg_sal)