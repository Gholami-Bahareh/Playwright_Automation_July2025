//String Methods
let myStr = "I am baHaR"

//**length** , is a property (not a method)
//counts the length of string, including spaces
console.log(myStr.length)  //10

// ***toUpperCase()**
//output: String
console.log(myStr.toUpperCase());  //I AM BAHAR

//**toLowerCase()**
//output: String
//for comparing two string it can be applied
console.log(myStr.toLowerCase()); //i am bahar

//**charAt(number)**
//input = a number  .... output = a character
console.log(myStr.charAt(3)); //m

//**includes** */if the string includes any other string
//input = string ... output = boolean 
console.log(myStr.includes('M bah')); //false

//**Slice(start number, end number)** */
//input = two numbers ... output = a string
console.log(myStr.slice(3,6)); //m b
console.log(myStr.slice(3,6).split("")) //[ 'm', ' ', 'b' ]
console.log(myStr.slice(3,6).split()) //[ 'm b' ]

//*substring(start number, end number)
console.log(myStr.substring(3,6)); //m b

//**split** */
//input = string , output = array //with using "" or '' the different chracteres will be plave in "" or '' 
console.log(myStr.split(""))    //['I', ' ', 'a', 'm',' ', 'b', 'a', 'H','a', 'R']

//I also can say that only this number of items be splited
console.log(myStr.split("",7))  //['I', ' ', 'a','m', ' ', 'b','a']

//the sort is first spaces, then capital letters
console.log(myStr.slice(0,11).split("").sort())   //[ ' ', ' ', 'H', 'I','R', 'a', 'a', 'a', 'b', 'm']
console.log(myStr.toLowerCase().slice(0,11).split("").sort())

let gh = "er fhbejg jrn" /// so b and spaces are not included
console.log(gh.split('b')) //[ 'er fh', 'ejg jrn' ]
console.log(gh.split(' ')) //[ 'er', 'fhbejg', 'jrn' ]



console.log(myStr.slice(0,11).split("").sort().join())  //// , ,H,I,R,a,a,a,b,m
console.log(myStr.toLowerCase().slice(0,11).split("").sort().join()) //// , ,a,a,a,b,h,i,m,r

let myStr2 = "hello, I am bahar, I turned 39"
//**Startwith**
//The startsWith() method returns true if a string starts with a specified string. 
// "OR"
//if from Xth index,does it start with something (4th example)
//Otherwise it returns false. //The startsWith() method is case sensitive.
//input =string ... opuput = boolean
console.log(myStr2.startsWith("hello"))
console.log(myStr2.startsWith("hello",1))
console.log(myStr2.startsWith("he"))
console.log(myStr2.startsWith("llo",2))

//**endsWith()** /
//exatcly the last one/ones "OR" third example 
console.log(myStr2.endsWith("39")) ///console.log(myStr2.endsWith(39)) ....>same result
console.log(myStr2.endsWith("turned 39"))
console.log(myStr2.endsWith("bahar",17)) // form 0th to 17th-1 , is the one/ones the last?

//**trim() */removes whitespace from both sides of a string:
let myStr3 = '  just to check ! '
console.log("OOO" + myStr3 + "OOO")
console.log("OOO" + myStr3.trim() + "OOO")
console.log("OOO" + myStr3.trimEnd() + "OOO") //removes whitespace from end of string
console.log("OOO" + myStr3.trimStart() + "OOO") //removes whitespace from start of string

//**indexOf()** .....returns the position of the first occurrence of a value in a string.  
// is case sensitive
console.log(myStr2.indexOf("bahar"))

//method returns -1 if the value is not found.
console.log(myStr2.indexOf("bahhar")) //-1

//**replace()**
//input :string .... output=string / 
//searches a string for a value or a regular expression. / returns a new string with the value(s) replaced.
//does not change the original string.
//hello, I am bahar, I turned 39"
console.log(myStr2.replace("hello","Heyyy :)")) //Heyyy :), I am bahar, I turned 39
let myStr4 = "Mr Blue has a blue house and a Blue car."
console.log(myStr4.replace(/Blue/g, "red")) //Mr red has a blue house and a red car. //all, case sensitive
console.log(myStr4.replace(/blue/g, "red")) //Mr Blue has a red house and a Blue car. //all, case sensitive
console.log(myStr4.replace(/Blue/, "red")) //Mr red has a blue house and a Blue car. //just the first, case sensitive
console.log(myStr4.replace(/blue/, "red")) //Mr Blue has a red house and a Blue car. //just the first, case sensitive
console.log(myStr4.replace(/Blue/gi, "red")) //Mr red has a red house and a red car. //all
console.log(myStr4.replace(/blue/i, "red")) //Mr red has a blue house and a Blue car. //the first -  ignore case(NOT case sensitive)
console.log(myStr4.replace(/Blue/i, "red")) ////Mr red has a blue house and a Blue car. //the first -  ignore case

//**match()**
//matches a string against a regular expression  output:array

let text = "The rain in SPAIN stays mainly in the p lain"
console.log(text.match("ian")) //null  // returns null if no match is found.
console.log(text.match("ain")) // ['ain',index: 5,input: 'The rain in SPAIN stays mainly in the plain',groups: undefined]
console.log(text.match(/ain/g)) //
console.log(text.match(/ain/i)) //
console.log(text.match(/ain/gi)) //


//**parseIn()**
//A string to convert into a number.
let numTexi = "8764473.849";
console.log(parseInt(numTexi));
