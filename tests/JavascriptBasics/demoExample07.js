//Array with Javascript

let arrayDemo = [345, "Demo", true, 203.39]; //array in JavaScript can contain element with different datatype

arrayDemo.forEach(function(val, ind){

    console.log(val + "   - "+ind);
})

console.log(arrayDemo.length);
console.log(arrayDemo[0]);
console.log(arrayDemo[1]);

const de  = 10;
const demoColor = ["Red", "Black", "Orange"];
//even above array is **const** we can change it , mutable

const demoColor1 = ["Indigo"];
const demoColor2 = ["Violet"];
const demoColor3 = ["Violet"];

demoColor.push("Blue"); //adding an item at the end (unshift, at the first)
console.log(demoColor);
demoColor.pop(); // remove the last value
console.log(demoColor);
demoColor.shift(); //remove the first element 
console.log(demoColor);
demoColor.unshift("White"); // adding an item at the start (push,at the end)
console.log(demoColor);
demoColor[0] = "Yellow"; //how to update a value inside the array
console.log(demoColor); //how to print all the value of array
let result =demoColor.concat(demoColor1);
let result2 =demoColor.concat(demoColor1,demoColor2,demoColor3);
 //how to combine other array with this one (one or more array can be placed here)
//demoColor.concat(demoColor1) is not ok (because) concat dont change the array/s, but create a new one
//so new variable is needed
console.log(result);

// i++ -> post increment
// ++i -> pre increment
// i-- -> post decrement
// --i -> pre decrement

for (let i = 0;i<result.length;i++) 
{
    console.log(result[i]);
    if(result[i]==='Volet')
    {
        console.log("Test Case is Passed")
    }
    else{
        console.log("Test Case is Failed")
        
    }

}   

result.forEach(function(colorsdemodemo, i){

    console.log(i + "  --> " + colorsdemodemo);
})