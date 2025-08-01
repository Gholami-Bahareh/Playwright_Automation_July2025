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



//تمرین 1.1 
const aa=[5,98,34,67]
aa.forEach(number=>console.log(number))

//تمرین 1.2:
const bb =['bahar', 'satar' , 'yara', 'ali','saba']
bb.forEach(name=>console.log(`Hello ${name}`))

//تمرین 1.3
const cc = [5,98,34,67]
cc.forEach(number=>{
    if(number%2===0){
        console.log(`${number} is Even`)
    }
    else{
       console.log(`${number} is Odd`) 
    }
})

//تمرین 2.1 
const dd = ['bahar', 'saman' , 'tara' , 'yara', 'ali','saba']
console.log(dd.length)

//تمرین 2.2
console.log(dd[dd.length-1])

//تمرین 2.3
const ee=[5,98,34]
const ff=[5,34]
function checkLenght(array){
    if(array.length>3){
        console.log('Array is big enough')
    }
    else{
        console.log('Array is small')
    }
}
checkLenght(dd)
checkLenght(ee)
checkLenght(ff)

//تمرین 3.1
const gg=[5,98,34]
gg.push(109)
console.log(gg)

//تمرین 3.2:
const hh =['bahar', 'ali','saba','fgfg']
hh.forEach(item=>gg.push(item))
console.log(gg)

//تمرین 3.3 ********************
const j=[5,98,34]
hh.forEach(item=>{
    j.push(item)
    if(j.length>5){
        console.log('Array has grown enough!');
    } 
})

//تمرین 4.1
const k =['bahar', 'ali','saba']
k.pop()
console.log(k)

//تمرین 4.2
const l =['bahar', 'ali','saba','fgfg']
console.log("lengh before pop: "+l.length)
l.pop()
console.log("lengh after pop: "+l.length)

//تمرین 4.3
const mm=[5,98,34,67]
const n=[5,98,67,34]
function checkIfPopedItemIsODDorEVEN(array){
    if(array.pop()%2===0){
        console.log('Even number removed')
    }
    else{
        console.log('ODD number removed')
    }
}
checkIfPopedItemIsODDorEVEN(mm)
checkIfPopedItemIsODDorEVEN(n)

//تمرین 5.1
const o =['bahar', 'ali','saba','fgfg']
console.log(o.shift())
console.log(o)

//تمرین 5.2
const p =['bahar', 'ali','saba','fgfg']
console.log(p.shift())
console.log(p)
console.log(p.shift())
console.log(p)
console.log(p.shift())
console.log(p)

//تمرین 5.3
const q =['Bahar', 'Ali','saba','fgfg']
const r =['Ali','Bahar', 'saba','fgfg']
function removeAndCheckForA(array){
    if('array.shift()'.startsWith('A'))    {
        console.log(`Removed name (${array.shift()}) started with A`)
    }
    else{
        console.log(`Removed name (${array.shift()}) is NOT started with A`)
    }
    }
removeAndCheckForA(q)
removeAndCheckForA(r)

//تمرین 6.1
const s =[ 'ali', 'saba', 'fgfg' ]
s.unshift('bahar')
console.log(s)

//تمرین 6.2
s.unshift('vida')
console.log(s[0])

//تمرین 6.3
const t =[ 'ali', 'saba', 'fgfg' ]
t.unshift('vida')
if(t.length===4){
    console.log('We now have 4 items!')
}
else{
  console.log('We now DONT have 4 items!')  
}

//تمرین 7.1
const u =[ 'ali', 'saba', 'fgfg' ]
const v=[5,98,34,67]
const uv = u.concat(v)
console.log(uv)

//تمرین 7.2
const w=['blue',52.3,'red']
const uvw= u.concat(v,w)
console.log(uvw)

//تمرین 7.3
const x=[]
console.log(v.length)
const vx = v.concat(x)
console.log(vx.length)

////تمرین 8.1
const numbers = [10, 25, 40, 5, 80]
console.log(numbers.filter(number=>number>20))

//تمرین 8.2
const names = ["Ali", "Sara", "Saba", "Kaveh", "Shiva", "Arash"]
console.log(names.filter(name=>  name.startsWith('S') && name.length>4))

//تمرین 9.1
const numbers1 = [2, 4, 6, 8]
console.log(numbers1.map(number=>number*2))
console.log(numbers1.map(function (name){
     return name*2
    }) )

//تمرین 9.2
const names1 = ["Ali", "Sara", "Saba"]
const names11 = names1.map(name=> `Hello, ${name}!`)
console.log(names11)

//تمرین 10.1
const numbers2 = [7, 11, 13, 18, 21]
let a = numbers2.find(number=> number%2===0)
console.log(a)

//تمرین 10.2
const words = ["book", "pen", "laptop", "bottle"]
let b = words.find(word => word.includes('o') && word.length>5)
console.log(b)

//تمرین 11.1
const numbers3 = [9, 15, 20, 25]
let c = numbers3.findIndex(number=> number%2===0)
console.log(c)

//تمرین 11.2
const people = ["Ali", "Saba", "Amir", "Sara"]
let d = people.find(person => person.startsWith('A') && person.length>4)
console.log(d)

//تمرین 12.1
const numbers4 = [3, 5, 9, 12]
let e = numbers4.some(number=> number%2===0)
console.log(e)

//تمرین 12.2
const users = ["ali", "sara","RADMIN", "Saba", "Admin"]
let f = users.some(user=> user.toLowerCase().includes('admin'))
console.log(f)

//تمرین 13.1
const numbers5 = [6, 8, 12]
console.log(numbers5.every(number=> number%2===0))

//تمرین 13.2
const names2 = ["Sara", "Saba", "Sina"]
console.log(names2.every(name=>name.startsWith('S')))

//تمرین 14.1
const fruits = ["apple", "banana", "mango"]
console.log(fruits.includes('banana'))

//تمرین 14.2
const codes = [101, 202, 303, 404]
function ifExistInArray(userInput){
        if(codes.includes(userInput)){
            console.log(`${userInput} is in Codes`)
        }
        else{
           console.log(`${userInput} is NOT in Codes`) 
        }
}
ifExistInArray(505)
ifExistInArray(303)

//تمرین 15.1 
const fruits1 = ["apple", "banana", "cherry", "orange"]
let g = fruits1.slice(1,3)
console.log(g)

//تمرین 15.2 *********
const numbers6 = [10, 20, 30, 40, 50, 60] 
console.log(numbers6.slice(3,4))

//تمرین 16.1
const animals = ["cat", "dog", "rabbit"]
let h =animals.splice(1,1)
console.log(h)
console.log(animals)

// to remove, add or change items of array
//array.splice(start, deleteCount, item1, item2, ...)

//تمرین 16.2
const tech = ["HTML", "CSS", "React"]
tech.splice(1,1,"JavaScript","JavaScript")
console.log(tech)

//تمرین 17.1
const colors = ["red", "blue", "green"]
console.log(colors.at(0))

//تمرین 17.2
const digits = [1, 2, 3, 4, 5]
console.log(digits.at(-2))

//تمرین 18.1 ******
 const letters = ["a", "b", "c", "d", "e"]
let  m= letters.copyWithin(1,0,1)
console.log(letters)

//تمرین 18.2******
const numbers7 = [10, 20, 30, 40, 50]
numbers7.copyWithin(2,0,2)
console.log(numbers7)


//تمرین 19.1 
const fruits2 = ["apple", "banana", "cherry"]
console.log(Array.from(fruits2.entries()))

//تمرین 19.2
const names3 = ["Ali", "Sara", "Saba"]
let names33 = Array.from(names3.entries())
console.log(names33)

//تمرین 20.1 
const word = "hello"
console.log(Array.from(word))

//تمرین 20.2
const str = "Bahareh"
let array = Array.from(str.toUpperCase())
console.log(array)

//تمرین 21.1
const parts = ["I", "love", "JavaScript"]
console.log(parts.join(" "))

//تمرین 21.2
const numbers8 = [1, 2, 3, 4]
console.log(numbers8.join("-"))


/*
till now I have 21 :
Some are in "demoExample070" some here
forEach()
length (خاصیت نه متد ولی مهمه)
push()
pop()
shift()
unshift()
concat()
at()
copyWithin()
entries()
Array.from()
map()
filter()
includes()
find()
findIndex()
some()
every()
slice()
splice()
sort()***
join()
 */







