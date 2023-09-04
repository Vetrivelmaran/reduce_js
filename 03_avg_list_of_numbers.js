const a=[1,2,3,4,5,6]
s=a.reduce((avg,num)=>{
    return avg+num/a.length
},10)
console.log(s)