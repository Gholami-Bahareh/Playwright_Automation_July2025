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

// تمرین ۱
let a = "123";
console.log(parseInt(a)+ " , type is: " + typeof parseInt(a))
let ab = "09124302384";
console.log(parseInt(ab)+ " , type is: " + typeof parseInt(ab))

// تمرین ۲
let b = "250px";
console.log(parseInt(b)+ " , type is: " + typeof parseInt(b))

//تمرین ۳
let c = "abc123";
console.log(parseInt(c))
//اینجا چون اولین آیتم توی رشته با عدد شروع نمیشه ، متد کار نمیکنه و برمیگردونه: NaN

// تمرین ۱ 
let aa = "3.14";
console.log(parseFloat(aa)+ " , type is: " + typeof parseFloat(aa))
console.log(parseInt(aa)+ " , type is: " + typeof parseInt(aa))
let acb = '09124302384';
console.log(parseFloat(acb)+ " , type is: " + typeof parseFloat(acb))

//تمرین ۲
let bb = "5.99kg";
console.log(parseFloat(bb)+ " , type is: " + typeof parseFloat(bb))
console.log(parseInt(bb)+ " , type is: " + typeof parseInt(bb))

// تمرین ۳
let cc = "abc8.7";
console.log(parseFloat(cc)+ " , type is: " + typeof parseFloat(cc))
//اینجا چون اولین آیتم توی رشته با عدد شروع نمیشه ، متد کار نمیکنه و برمیگردونه: NaN
//یه سوال دارم اینجا، وقت ینمیتونه کانورت کنه یه عدد، اما چرا وقتی تایپ و میخوام چاپ کنم میگه "نامبر"؟؟

//تمرین ۱
let str = '{"name": "Ali", "age": 30}';
let parsedStr = JSON.parse(str)
console.log(parsedStr+ " , type is: " + typeof parsedStr)
console.log(parsedStr.name)
console.log(parsedStr.age)

// تمرین ۲
let str1 = '{"users": ["Sara", "Omid", "Reza"]}';
let parsedStr1 = JSON.parse(str1)
console.log(parsedStr1.users[1])
console.log(parsedStr1.users+ " , type is: " + typeof parsedStr1)

//تمرین ۳ 

// let str2 = "{name: 'Sara', age: 25}";
// let parsedStr2 = JSON.parse(str2)
// //اینجا خطا میگیرم چون فرمت درست جیشون نیست که بتونه کانورت کنه 
// console.log(parsedStr2.name)
// console.log(parsedStr2.age)

let str22 = '{"name": "Sar00", "age": 35}';
let parsedStr22 = JSON.parse(str22)
console.log(parsedStr22.name)
console.log(parsedStr22.age)

//تمرین ۱
let a1 = "100";
console.log(Number(a1),  "... type is:" , typeof Number(a1))

let a2 = "09124302384";
console.log(Number(a2),  "... type is:" , typeof Number(a2))

// تمرین ۲
let b1 = "50.5";
console.log(Number(b1)+10)
console.log(Number(b1),  "... type is:" , typeof Number(b1))

// تمرین ۳ 
let c1 = "abc";
console.log(Number(c1),  "... type is:" , typeof Number(c1))
//اینجا چون اولین آیتم توی رشته با عدد شروع نمیشه ، متد کار نمیکنه و برمیگردونه: NaN
//یه سوال دارم اینجا، وقت ینمیتونه کانورت کنه یه عدد، اما چرا وقتی تایپ و میخوام چاپ کنم میگه "نامبر"؟؟

//تمرین ۱
let a3 = "2 + 3 * 4";

//تمرین ۲ 
let b3 = "(10 + 5) * 2";

//تمرین 3
let name = "Ali";
let expr = `"Hello " + name`;











