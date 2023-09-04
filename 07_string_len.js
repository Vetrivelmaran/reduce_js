// Write a function that takes an array of strings and returns the longest string in
// the array. Use the reduce method to accomplish this.
const a=['vetrivel','pravinabthul','david','santhosh'];
l=a.reduce((a,b)=>{
    if(a.length<b.length){
        a=b;
    
    }
    return a
});
console.log(l)