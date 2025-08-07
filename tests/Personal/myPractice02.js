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
//"NaN" it self has the type of -> number .... it means : "Not a Number"
//این یک ویژگی خاصه که باعث می‌شه حتی اگر مقدار قابل فهم نیست، باز هم اگر تایپ  "نان" رو بگیریم بده "نامبر" ،بله اینطوریاس
 

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
//"NaN" it self has the type of -> number .... it means : "Not a Number"
//این یک ویژگی خاصه که باعث می‌شه حتی اگر مقدار قابل فهم نیست، باز هم اگر تایپ  "نان" رو بگیریم بده "نامبر" ،بله اینطوریاس

//تمرین ۱
let a3 = "2 + 3 * 4";
console.log(eval(a3), "....datatype", typeof eval(a3))

//تمرین ۲ 
let b3 = "(10 + 5) * 2";
console.log(eval(b3), "....datatype", typeof eval(b3)) //30
let b33 = "10 + 5 * 2";
console.log(eval(b33), "....datatype", typeof eval(b33)) //20


//تمرین 3
let name = "Ali";
let expr = `"Hello " + name`;
console.log(eval(expr))
//nothing stopped me to do so , so Hello Ali is printed

//4
// a fucking crazy one
let randomValue = { name:"lindia"}  
//console.log(typeof randomValue)
randomValue =23
//console.log(typeof randomValue)
if(!typeof randomValue ==="String"){
    console.log("It is not a String!")
}
else{
   console.log("Yay is a String!") 
}
//output : Yay is a String!
