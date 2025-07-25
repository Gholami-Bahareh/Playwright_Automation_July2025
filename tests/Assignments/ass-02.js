const arStr = ["bahar","Ali","Saba","Vida","Sepi","Kave"]
const arNum = [43,78,5,890,54,213]

//***concat()***
//combining two arrays
/*const arNew = arStr.concat(arNum)
console.log(arNew)
const arNew2 = arNum.concat(arStr)
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

const arSrtNew = arStr.map(function(naam,indi){
    return indi + " : " + naam

})
console.log(arSrtNew)

const arNumT = arNum.map(function (number) {
    return number/100+" T"    
}) 
console.log(arNumT)
console.log(arNum.map(function (number) {
    return number/100+" T"    
}) )

//with Arrow Function!
const sumTwo=(num1,num2) =>  num1+num2

console.log(sumTwo(5,56))

