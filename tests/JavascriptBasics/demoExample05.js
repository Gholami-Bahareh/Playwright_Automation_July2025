//Program to check a number is even/odd

let m = 19341;

//conditional statment - if else, if elseif, switch, if without else, ternary operator(Single line if else)

if(m%2===0)
{
    console.log("It is even number");
}
else{
    console.log("It is odd number");
}

function checkForOddOrEven(number){
    if(number%2===0){
        console.log(`${number} is an Even number` )
    }
    else{
       console.log(`${number} is an Odd number` ) 
    }
}

checkForOddOrEven(109)
checkForOddOrEven(52)
checkForOddOrEven(8)
checkForOddOrEven(29)

/*
if(condition)
//statement
else if(condition)
//statement
else if(condition)
//statement
else
//statement
*/
