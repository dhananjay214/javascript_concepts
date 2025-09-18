function one() {
  let a = 10;
  var b = 20;
  const c = 30;

  if (true) {
    let a = 100; // block scope
    var b = 200; // function scope
    const c = 300; // block scope
    console.log("Inside if block: ", a, b, c); // 100 200 300
  }
  function two() {
    let a = 50;
    var b = 60;
    const c = 70;
    console.log("Inside function two: ", a, b, c); // 50 60 70
  }
}

if (true) {
  const validUsernames = ["prajwal", "sunny", "mohit"];
  const username = "prajwal";
  if (validUsernames.includes(username)) {
    const password = "12345";
    console.log("Inside nested if block: ", username, password); // prajwal 12345
  } else {
    console.log("wrong user does not match");
  }
}
//one(); // 10 200 30
//console.log(a, b, c); // ReferenceError: a is not defined
//two(); // ReferenceError: two is not defined
