let num = 5652365.365842
console.log( num.toString().split("."));
let  [integerPartStr,decimalPartStr]=num.toString().split(".")
let integerPart = Number(integerPartStr)
let decimalPart = Number(decimalPartStr)

function checkEvenOrOdd(number, label){
if(number%2===0){
    console.log(`${label} (${number}) is Even! `)
}
else{
   console.log(`${label} (${number}) is Odd! `) 
}
}

checkEvenOrOdd(decimalPart,'deciimalPart')
