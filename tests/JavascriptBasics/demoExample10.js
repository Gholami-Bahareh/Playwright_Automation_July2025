let m =12.4;
let mm =12.51;
let n =10;

// Tan HyperBolic

console.log(Math.round(m));
console.log(Math.round(mm));
console.log(Math.abs(-m));

console.log(Math.ceil(m));

console.log(Math.floor(m));

console.log(Math.random());
console.log(Math.sqrt(64));

console.log(Math.cbrt(8));

function generateRandomEmailAddress()
{
    const chr = 'abcdefghijklmnopqrstuvxyz0123456789'

    let username = '';

    for(let i = 0; i < 6; i++)
    {
        username = username + chr.charAt(Math.random()*chr.length);
    }

    console.log(`${username}testing@hotmail.com`);
}

generateRandomEmailAddress();