const myheros = ["spiderman", "ironman", "batman", "superman"];
const heros2 = ["captain america", "thor", "black panther"];

//const allheros = myheros.concat(heros2);

// console.log(myheros);

// // arrays methods
// console.log("=====Here i am practicing array in js====");

// myheros.push("hulk");
// console.log("After push", myheros);

// myheros.unshift("doctor strange");
// myheros.shift("sunny");
// console.log("After unshift", myheros);

// myheros.pop();
// console.log("After pop", myheros);

// myheros.includes("vvv");
// console.log("After includes", myheros.includes("spiderman"));

// myheros.indexOf("batman");
// console.log("After indexOf", myheros.indexOf("batman"));

// console.log(myheros);

// const newheros = myheros.join();
// console.log("After join", newheros);

// const allheros = myheros.concat(heros2);
// console.log("After concat", allheros);

const m1 = myheros.slice(1, 4);
//console.log("After slice", m1);

const m2 = myheros.splice(1, 2, "wonderwoman");
//console.log("AFTER SPLICE", m2);

myheros.reverse();
console.log("After reverse", myheros);

myheros.sort();
console.log("After sort", myheros);

myheros.sort().reverse();
console.log("After sort and reverse", myheros);

myheros.push("antman");
console.log("After push", myheros);

// myheros.push(heros2);
// console.log("After push heros2", myheros);

const allheros = [...myheros, ...heros2];
console.log("After spread operator", allheros);

const newarray = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12]];
//console.log(newarray);

const flatenewarray = newarray.flat();
console.log("After flat", flatenewarray);

console.log(Array.isArray("prajwal"));
console.log(Array.from("prajwal"));

console.log(Array.from({ name: "prajwal" }));

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
console.log(Array.of("prajwal", "dhananjay", "sanket"));
