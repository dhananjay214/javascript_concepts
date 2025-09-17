// Basic variable declarations
let name = "OM";
const age = 33;
var city = "Pune";
let score = 0;

// Output initial values
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Score greater than 0?", score > 0);

// Demonstrate let reassignment
let country = "India";
console.log("Country before change:", country);
country = "Bharat";
console.log("Country after change:", country);

// Demonstrate const with array
const colors = ["red", "green", "blue"];
colors.push("yellow");
console.log("Colors:", colors);

// Demonstrate var redeclaration
var language = "JavaScript";
console.log("Language before redeclaration:", language);
var language = "TypeScript";
console.log("Language after redeclaration:", language);

// Undefined and null
let notAssigned;
let emptyValue = null;
console.log("notAssigned (undefined):", notAssigned);
console.log("emptyValue (null):", emptyValue);

// typeof examples
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of city:", typeof city);
console.log("Type of score:", typeof score);
console.log("Type of notAssigned:", typeof notAssigned);
console.log("Type of emptyValue:", typeof emptyValue);
