// ***In an array of Number, find the largest number***
// ***In an array of Number, How many are Prime numbers***


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