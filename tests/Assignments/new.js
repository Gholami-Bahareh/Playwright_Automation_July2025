
// //***eval***
// const sum = eval('10*10+5');
// console.log(sum)

// let h = 10*10+5
// console.log(h)

// // function sayHi(){
// //     console.log(name);
// //     // console.log(age);
// //     var name = 'lindi'
// //     // let age = 21;


// // }

// // sayHi()
// //...
// // let c = {gre:'hei'}
// // let d;
// // d=c;
// // c.gre='hek'
// // console.log(d.gre)

// const shape={

//     radius:10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter:()=>2*Math.PI* this.radius,
// };

// // console.log(shape.diameter())
// // console.log(shape.perimeter())

// // console.log(typeof typeof 1)

// const bird = {
//     size:'small',
// };

// const mouse= {
//     name: 'mini',
//     small: true,
// }
// // console.log(mouse.bird.size)
// // console.log(mouse[bird["size"]] )

// // let randva = {name: 'fhh'}
// // randva = 23
// // if(!typeof randva ==="string"){
// //     console.log('first')
// // }
// // else{
// //     console.log('second')
// // }
// // console.log(typeof randva)

// // const name = 'Lydia'; console.log(name());

// //تمرین 18.2******
// const numbers7 = [10, 20, 30, 40, 50]
// numbers7.copyWithin(2,0,2)
// const numbers8 = [10, 20, 30, 40, 50]
// numbers8.copyWithin(2,0,1)
// console.log(numbers8)
// const numbers9 = [10, 20, 30, 40, 50]
// numbers9.copyWithin(2,0,3)
// console.log(numbers9)
// const numbers10 = [10, 20, 30, 40, 50]
// numbers10.copyWithin(2,1)
// console.log(numbers10)

// for(var i =0 ; i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }

// for(let i =0 ; i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }

for (var i = 0; i < 3; i++) {
  console.log(i)
}
console.log(i)


// for (let j = 0; j < 3; j++) {
//   console.log(j)
// }
// console.log(j)

function showCount() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log("Number:", i), i * 4000);
  }
}
showCount();

const data = '{"users": ["Ali", "Sara", "Reza"]}';
const parsed = JSON.parse(data);
console.log(parsed.users[1]);


let number = '"09124302384"'
let b = JSON.parse(number)
console.log(b)