const Temperature = 30;

if (Temperature == 30) {
  // < > <= >= == === != !==
  const a = 30;
  console.log("It's a hot day");
} else {
  console.log("It's a cold day");
}
// cnsole.log("value of a is", a); //it will print error.

//nsole.log(Temperature);
const balance = 500;
if (balance > 1000) {
  console.log("You have a good balance");
} else if (balance < 750) {
  console.log("balance is less than 750");
} else {
  console.log("Your balance is low");
}
const isUserLoggedIn = true;
const debitCard = false;
const password = 1234;

if (isUserLoggedIn && debitCard && password) {
  console.log("allowed to shopping...");
} else if (password) {
  console.log("enter password here .... ");
} else {
  console.log("denied...");
}
