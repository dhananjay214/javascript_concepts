function sayName() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("J");
  console.log("W");
  console.log("A");
  console.log("L");
}

sayName();

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);

  //let result = num1 + num2;
  return num1 + num2;
}

const result = addTwoNumbers(5, 7);
console.log("result:", result); // 12

function loginUserMessage(username) {
  //if (username === undefined)
  if (!username) {
    console.log("please enter username :");
    return;
  }
  return ` ${username} just logged in`;
}

//console.log(loginUserMessage("prajwal"));
//console.log(loginUserMessage()); // it will return undefined
//console.log(loginUserMessage("")); // it will return empty string

///////////////////////////////////////////////

function calculateCartPrice(val1, val2, cartNumber) {
  return cartNumber;
  return val1 + val2;
}
console.log(calculateCartPrice(33, 44, 5));
const cartvalue = calculateCartPrice(33, 44, 5);
console.log(cartvalue);
