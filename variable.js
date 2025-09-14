let name = "OM";
const age = 33;
var city;
city = "Pune";
let score;

console.log(name, age, city);
console.log(score > 0);

// More variable examples

let country = "India"; // let can be reassigned
country = "Bharat";
console.log("Country:", country);

const pi = 3.14; // const cannot be reassigned
console.log("Value of pi:", pi);

var language = "JavaScript"; // var can be redeclared and reassigned
language = "TypeScript";
console.log("Language:", language);

let notAssigned; // undefined by default
let emptyValue = null; // explicitly set to null
console.log("notAssigned:", notAssigned);
console.log("emptyValue:", emptyValue);

// typeof examples
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of city:", typeof city);
console.log("Type of score:", typeof score);
console.log("Type of notAssigned:", typeof notAssigned);
console.log("Type of emptyValue:", typeof emptyValue);
