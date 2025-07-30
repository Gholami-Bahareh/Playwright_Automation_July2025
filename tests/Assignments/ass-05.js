// ***In an array of Number, find the largest number***
let arr = [43,675,332,45,345,654]
function findMax(array){
    console.log(Math.max(...arr))
}
findMax(arr)

// ***In an array of Number, How many are Prime numbers***
// ***In an array of Number, How many are Prime numbers***


console.log("In an array of Number, How many are Prime numbers:")

let arrP = [674,54,17,37,109,16]
let sum = 0
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
        sum+=1
       }
     
    }  
)
console.log(`there are ${sum} prime numbers`)
//OR:
function numberOfProme(anarray) {
    let sum = 0
anarray.forEach(function(num){
    let comp = Math.sqrt(num)
    let parr = []
    for(r=2;r<=comp;r++){
        let p = num%r
        parr.push(p)
        }
       if( parr.includes(0)===false){
         sum+=1
       }
    }  
)
console.log(`there are ${sum} prime numbers`)
}

numberOfProme(arrP) 



// ***For a String - 'London' -> Reverse the letter of the String***
function revesIt (str){
    let r =str.toLowerCase().split("").reverse().join("")
    console.log(`reverse of "${str}" is "${r}"`)
}
revesIt("London")
revesIt("mandana")

// ***For a Sentence - "I am new to javascript" -> Reverse the individual word output -> "I ma wen ot tpircsavaj"***
function reverseEach(sent){
const  arr = sent.split(' ')
let narr =[]
   arr.forEach(function (word,i){
    narr.push(word.toLocaleLowerCase().split("").reverse().join(""))
   })
console.log(narr.join(" "))}
reverseEach("I am new to javascript")
reverseEach("I did it")


// ***Check the given word is Palindrome or not -> 'Mom'***
function isPalindrome(str){
    let w = str.toLowerCase()
    if(w=== w.split("").reverse().join("") ){
        console.log(`${w} , is Palindrome`)
    }
    else{
        console.log(`${w} , is NOT Palindrome`)
    }
}
isPalindrome("Mom")
isPalindrome("HJGkgjh")
isPalindrome("bahareh")


// To Display the Fibonacci Series -> 0 1 1 2 3 5 8 13
let n = 1000
console.log(0)
console.log(1)
let prev1 = 2
let prev2 = 1
for (let i = 0; i < 22; i++) {
   let current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    console.log(current)
}