// Get integer and decimal parts of a number and check if parts are odd or even

//first way
const n = "45676.69787"
for (let i = 0; i < n.length; i++) {
    //console.log(n[i]);
    if(n[i]==="."){
        let r = n[i-1]%2;
        if(r===0){
            console.log("first piece is even")
        }
        else{
            console.log("first piece is odd")
        }
    }
    
  
}

let r2= n[n.length-1]%2
if(r2===0){
    console.log("second piece is even")
}
else{
    console.log("second piece is odd")
}

//second approach

let number = 65225.8747123546
console.log(number.toString())

console.log(number.toString().split("."))
let [integePartStr,decimalPartStr] = number.toString().split(".");
console.log(integePartStr,decimalPartStr)
let integePart = parseInt(integePartStr,10)
let decimalPart = parseInt(decimalPartStr,10)
function checkEvenOrOdd(num, name){
    if (num%2===0){
        console.log(`${name} : ${num} is even!`)
    }
    else{
        console.log(`${name} : ${num} is Odd!`)
    }
}
 
checkEvenOrOdd(decimalPart,"decimalPart")
checkEvenOrOdd(integePart,"integePart")









