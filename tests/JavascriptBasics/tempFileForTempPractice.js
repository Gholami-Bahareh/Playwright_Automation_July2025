//چالش باقی مونده که باید حل کنم 
// let people = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 22 },
//   { name: "Reza", age: 19 },
//   { name: "Mina", age: 15 },
//   { name: "Amir", age: 30 }
// ];
// const adult = people.filter(age<18)
// console.log(adult)

// //تمرین 3.3 ********************
// const j=[5,98,34]
// h.forEach(item=>{
//     j.push(item)
//     if(j.length>5){
//         console.log('Array has grown enough!');
//     } 
// })
// /*
//   بررسی رشد طول آرایه بعد از
//  push()
//  عالیه که شرط گذاشتی. فقط بدون
//  console.log 
//  داخل
//   forEach 
//   برای هر بار شرط رو بررسی می‌کنه، یعنی چند بار ممکنه بنویسه
//    'Array has grown enough!'. 
//     اگه فقط یک‌بار بخوای اینو بنویسه از
//      if (j.length > 5 && flag === false)
//       باید استفاده کنی.
// */

// //تمرین 5.3
// //یه آرایه از رشته‌ها بساز. اگه مقدار حذف‌شده با حرف (آ انگلیسی)  شروع می‌کرد، بنویس:
// //Removed name started with A
// const q =['Bahar', 'Ali','saba','fgfg']
// const r =['Ali','Bahar', 'saba','fgfg']
// function removeAndCheckForA(array){
//     if('array.shift()'.startsWith('A'))    {
//         console.log(`Removed name (${array.shift()}) started with A`)
//     }
//     else{
//         console.log(`Removed name (${array.shift()}) is NOT started with A`)
//     }
//     }
// removeAndCheckForA(q)
// removeAndCheckForA(r)
// /*
// اینجا داری روی یک رشته‌ی ساده‌ی
// 'array.shift()'
// شرط می‌ذاری، نه روی مقدار واقعی.
// اما باید : همیشه اول
// shift()
// کن، نتیجه رو بریز توی یه متغیر، بعد شرط چک کن.
// */


////
//reduce()
//1
const numbers = [1, 2, 3, 4, 5]
//array.reduce((accumulator, currentValue) => {
  // کاری که می‌خوای انجام بدی
//  return updatedAccumulator;
//}, initialValue);

const sumNumeber = numbers.reduce((acc,curr) =>{
    return acc+curr
},0
)
console.log(sumNumeber)

//2
const multiplyNumeber = numbers.reduce((acc,curr) =>{
    return acc*curr
},1
)
console.log(multiplyNumeber)

//3
const b = numbers.reduce(()=>{
    return Math.max(...numbers)
},0)
console.log(b)
// function findMax(array){
//     console.log(Math.max(...arr))
// }
// findMax(arr)


console.log(this)
function sayHi() {
  console.log(this);
}

sayHi();