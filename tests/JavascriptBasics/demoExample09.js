// //string method examples

let str = 'Hello I am new to JavaScript'
console.log(str.length)

console.log(str.toUpperCase()); 
console.log(str.toLowerCase()); //for comparing two string it can be applied
console.log(str.charAt(11));

console.log(str.includes('W to'));
console.log(str.includes('w to'));

console.log(str.slice(1,5));

//check two srt are Anagram?
let str1= "silent";
let str2= "listen";

function isAnagramSet(str1,str2){
let word1 = str1.toLowerCase();
let word2 = str2.toLowerCase();

if (word1.length===word2.length){
    if (word1.split('').sort().join()===word2.split('').sort().join()){
        //console.log(word1.split('').sort().join()) ..> // e,i,l,n,s,t
        
        console.log("words are Anagram Set")
    }
}
else{
    console.log("words are NOT Anagram Set")
}}

isAnagramSet("silent","listen")






