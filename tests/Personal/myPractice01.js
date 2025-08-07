//to write if something is in the array say testcase= pass, else say not pass.. Using ***flag***
const result = [ 'Yellow', 'Black', 'Orange','violet', 'Indigo' ]
let flag = false
for(i=0;i<result.length;i++){
    if(result[i]==="violet"){
        flag = true    
        break        
    }
    
}
if (flag){
    console.log("testcase pass")
}
else{
    console.log("Testcase fail")
}

//array.forEach(callbackfn(items, index, array(optional)){some code})
let arrayDemo = [345, "Demo", true, 203.39];

arrayDemo.forEach(function(val, ind){

    console.log("things are:"+val + "   - "+"with this index: "+ind);
})


//to generate randon email address

function generateRandomEmailAddress(){
let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
let username = ''
for(i=0; i<9; i++){
   
    let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
    username= username +char.charAt(Math.random()*char.length)
}
console.log(username +"test@gmail.com")}

generateRandomEmailAddress()


//to generate randon mobile numbers

function generateRandomMobilenumber(){
    
mobilenumber ='0'
for(let i=0;i<9;i++){
    let num  = '0123456789'
    mobilenumber = mobilenumber +num.charAt(Math.random()*num.length)
    
}
console.log(mobilenumber)
}
generateRandomMobilenumber()

// ***In an array of Number, How many are Prime numbers***


console.log("In an array of Number, How many are Prime numbers:")

let arrP = [674,54,17,37,109,16]
arrP.forEach(function(num){
    let comp = Math.sqrt(num)
    let parr = []
    for(r=2;r<=comp;r++){
        let p = num%r
        parr.push(p)
        }
       if( parr.includes(0)===true){
        console.log(`${num} is not prime`)
       }
       else{
        console.log(`${num} is a prime number`)
       }
    } 
)



