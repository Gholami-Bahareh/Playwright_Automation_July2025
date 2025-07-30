//Array's Method

const arStr = ["bahar","Ali","Saba","Vida","Sepi","Kave"]
const arNum = [1365,27,5,86,110,213]

//***concat()***
//combining two arrays
/*const arNew = arStr.concat(arNum)
console.log(arNew)
const arNew2 = arNum.concat(arStr) //***OR***   const arNew2 = [...arNum,...arStr]
console.log(arNew2)*/


//**at()**
// to Return the item located at the specified index.
// console.log(arStr.at(2));     
// console.log(arNum.at(-1));
// console.log(arStr.at(-3));

//***array.copyWithin(target, start, end)***
//to copy array elements to another position in an array/overwrites the existing values/ doesent change the lengh of array
//syntax:  array.copyWithin(target, start, end)
//where i want to put item/items? from which item should i start(which index)? from the item to which item(index-1)?
//console.log(arStr.copyWithin(4,0,1))

//***arStr.entries()***
// arStr.entries() : turn array into a iterator object
// then I turn it to a new array ((with this ***Array.from() )) and print it    
// console.log(Array.from(arStr.entries()));

// ***Array.from()***
//converting string to Array **
// Array.from ("Bahareh")
// console.log(Array.from ("Bahareh"))

//***forEach*** 
//forEach with call back function(defined directly)
// arStr.forEach(function(namn,i){
//     console.log(i+"-->"+namn)
// })

// arNum.forEach(function(number,i){
//     console.log("milti of "+ number+ " is: "+ arNum[i]*2)
// })

//forEach with user defined function //it is ok if the function is defined after or before the forEach
// arNum.forEach(minFunction)
// function minFunction (item, index,arr){
//         arr[index] = item * 11 ;
//     }

// console.log(arNum.forEach(minFunction)) /// no output -> undefined





//***map()***
//create a new array ... a function will do thing on each element and the new elent where be placed in new array
//array.map(function(item, index, array) {
  // return something
//})

// const arSrtNew = arStr.map(function(naam,indi){
//     return indi + " : " + naam

// })
// console.log(arSrtNew)

// const arNumT = arNum.map(function (number) {
//     return number/100+" T"    
// }) 
// console.log(arNumT)
// console.log(arNum.map(function (number) {
//     return number/100+" T"    
// }) )
// const arNumHlaf = arNum.map(function(number){
//     return number/2
// })
// console.log(arNumHlaf)

// const arNumThird = arNum.map(byThree= number=>number/3)
// console.log(arNumThird)

// //with Arrow Function!
// const sumTwo=(num1,num2) =>  num1+num2
// console.log(sumTwo(5,56))

// **Filter()**
// a new array , with items of previous array with a condition
// const arStrA = arStr.filter(names=> names.startsWith("S"))
// console.log(arStrA)
// const arStrFour = arStr.filter(names=> names.length>4)
// console.log(arStrFour)
// function ifContainE(name){
//     return name.includes("e")
// }
// const arStrWithE = arStr.filter(ifContainE)
// console.log(arStrWithE)

// const arNumEven= arNum.filter(digit=> digit%2===0)
// console.log(arNumEven)
// const arNumOdd= arNum.filter(digit=> digit%2!==0)
// console.log(arNumOdd)

//**includes**
// console.log(arStr.includes("Saba"))
// console.log(arNum.includes(426/2))

//**find()**
//find the "first item" that meet the condition
// function firstFouri(name){
//    return  name.length ===4
// }
// console.log( arStr.find(firstFouri) )

// console.log(arNum.find(number=> number%2===0))
// console.log(arNum.find(number=> number%2!==0))

//**findindex()**
//find the "first index of item" that meet the condition
// console.log( arStr.findIndex(firstFouri) )

// console.log(arNum.findIndex(number=> number%2===0))
// console.log(arNum.findIndex(number=> number%2!==0))

//**some()**
//check if "at least" one item meet the condition
// console.log(arNum.find(number=> number%2!==0))
// console.log(arNum.findIndex(number=> number%2!==0))
// console.log(arNum.some(number=> number%2!==0))

// function firstFouri(name){
//    return  name.length ===6
// }
// console.log( arStr.some(firstFouri) )

//**every()**
//check if "ALL" items meet the condition
// console.log(arNum.find(number=> number>=5))
// console.log(arNum.some(number=> number>=5))
// console.log(arNum.every(number=> number>=5))

// function firstFouri(name){
//    return  name.length ===4
// }
// console.log( arStr.some(firstFouri) )
// console.log( arStr.every(firstFouri) )

//**slice()**
// array.slice(start, end) //will act on one item before end
// const a = arStr.slice(1,4)
// console.log(arStr)
// console.log(a)

//**splice()**
// to remove, add or change items of array
//array.splice(start, deleteCount, item1, item2, ...)
// console.log(arStr)
// console.log(arStr.splice(0,3, "folan", "bahman", "bisar"))
// console.log(arStr)

// console.log(arNum)
// arNum.splice(2,1,55,66)
// console.log(arNum)

// arNum.splice(2,2,5)
// console.log(arNum)

//**sort() **
//input and output = array
//to sort it alphabetic order , or from lower to higher ...BUT:
//in a special way considering capital letter first , not consider lenght of digit 
//the sort is first spaces, then capital letters 
console.log(arNum.sort()) //[ 110, 1365, 213, 27, 5, 86 ]
console.log(arStr.sort()) //[ 'Ali', 'Kave', 'Saba', 'Sepi', 'Vida', 'bahar' ]


//join()// turning Array to string...
console.log(arNum.sort().join()) //110,1365,213,27,5,86
console.log(arStr.sort().join()) //Ali,Kave,Saba,Sepi,Vida,bahar
console.log(arStr.sort().join("")) //AliKaveSabaSepiVidabahar

//









