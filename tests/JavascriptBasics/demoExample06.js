const number = 333.312467;

const [integerPartStr, decimalPartStr] = number.toString().split('.');
//integerPartStr, decimalPartStr - In String format
console.log(number.toString().split('.'))

const integerPart = parseInt(integerPartStr, 10);
const decimalPart = parseInt(decimalPartStr, 10);
//now that we have two number again , we can do : integerPart%2
//BUT, even if I do : integerPartStr%2, it works! S
// ince we use %, javascript change it to number automatically

function checkEvenOrOdd(value, label) {
  if (value % 2 === 0) {
    console.log(`${label} (${value}) is EVEN`);

  } else {
    console.log(`${label} (${value}) is ODD`);
  }
}

checkEvenOrOdd(integerPart, "Integer part");
checkEvenOrOdd(decimalPart, "Decimal part");



// const number = 3948.432943;

// // Get integer and decimal parts
// const integerPart = Math.floor(number);
// const decimalPart = parseInt((number - integerPart).toFixed(10).split('.')[1], 10);

// // Function to check even or odd
// function checkEvenOrOdd(value, label) {
//   console.log(`${label} (${value}) is ${value % 2 === 0 ? 'EVEN' : 'ODD'}`);
// }

// // Check
// checkEvenOrOdd(integerPart, "Integer part");
// checkEvenOrOdd(decimalPart, "Decimal part");