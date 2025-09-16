const score = 500;
console.log(score);

const balance = new Number(20033);
console.log(balance);

console.log(balance.toString());
//console.log(balance.toFixed(3));
//console.log(balance.toString.length);

//console.log(balance.valueOf());
console.log(score.toString().length);

console.log(score.length);
console.log(balance.length);

const otherNumber = 123.1234;
console.log(otherNumber.toPrecision(4));

let name = "Dhanajay";
let frndName = "prajwal";
console.log(`concatnation of two string is ${name} ,and ${frndName}`);

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));
//=================Math========================

console.log(Math);
console.log(Math.abs(-55));
console.log(Math.round(4.6));
console.log(Math.ceil(3.2));
console.log(Math.floor(4.9));
console.log(Math.min(2, 3, 4, 5, -1, -55, 0));
console.log(Math.max(2, 3, 4, 5, -1, -55, 0));
console.log(Math.random());
console.log((Math.random() * 10) + 1);


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);