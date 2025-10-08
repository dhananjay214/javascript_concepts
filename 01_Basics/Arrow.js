const user = {
  username: "prajwal",
  price: 1000,
  welcommeMessage: function () {
    console.log("Welcome " + this.username);
    console.log(`${this.username} , welcome to website`);
  },
};
user.welcommeMessage();
user.username = "sunny";
user.welcommeMessage();

console.log(this); // window object in browser

// function chai() {
//   let username = "pawan";
//   console.log(this.username); // window object in browser
// }
//chai();

// const chai = function () {
//   let username = "pawan";
//   console.log(this.username); // window object in browser
// }
// chai();

const chai = () => {
  let username = "pawan";
  console.log(this.username); // window object in browser
};

chai();

/////////////ARROW FUNCTION AND THIS KEYWORD//////////////////////
const adduser = (num1, num2) => num1 + num2;
{
  //const addTwo = (num1, num2) => num1 + num2;
  //return num1 + num2;
}
console.log(adduser(50, 50));

const addTwo = (num1, num2) => ({ username: "prajwal" });
console.log(typeof addTwo);
console.log(addTwo(50, 50).username); // prajwal

(function example() {
  //named iiffe immediately invoked function expression
  console.log(`DB CONNECTED`);
})();

(() => {
  //anonymous iiffe immediately invoked function expression
  console.log(`DB CONNECTED successfully`);
})(); // here if we dont write this semicolon it will give error because js engine will think this is a function call of above function76

((name) => {
  // two iife with parameter
  console.log(`DB CONNECTED successfully${name}`);
})(" hii sunny ");


