
let keyName1 = "city";
let myObj1 = {
  [keyName1]: "Tehran"
};
console.log(myObj1.city) //access to value of a key
console.log(myObj1["keyName1"]) /// undefined
console.log(myObj1[keyName1]) //access to value of a key
myObj1["keyName1"] = 777 // adding a new key: value
myObj1.nobel = true // adding a new key: value
myObj1["date"] = "ok" // adding a new key: value
//myObj1[date] = "ok" // XXX error
console.log(myObj1)
myObj1.city = 666 //update the value of key
console.log(myObj1)
myObj1[keyName1] = 888 //update the value of key
console.log(myObj1)
console.log(keyName1)
console.log(Object.entries(myObj1)) //print the whole object in which all the pairs are an object!
console.log(Object.keys(myObj1));    //print only all keys
console.log(Object.values(myObj1));  //print only all values 
let copy = {...myObj1} //shallow copy!
console.log(copy) //where there is completly new objrct 
console.log("nobel" in myObj1) //if a "key" is in object  output: true
// console.log(nobel in myObj1) //XXX erro
console.log('ok' in myObj1) //if a "key" is in object  output: false

delete myObj1.date //delete a key-value
console.log(myObj1)
delete myObj1["nobel"] //delete a key-value
///delete myObj1[nobel] //XXX 
console.log(myObj1)
