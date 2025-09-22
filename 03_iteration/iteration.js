for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    console.log("5 is the best number ");
  }
  console.log(element);
}

for (let j = 0; j < 10; j++) {
  console.log(`ineer loop vlaue is ${j}`);

  for (let d = 0; d < 10; d++) {
    // console.log(`outer loop value is ${d}  and inner loop is ${j}`);

    console.log(j + "*" + d + "=" + j * d);
  }
}
let myArray = ["flash", "batman", "spiderman"];
console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`detected 5 at index`);
    break;
  }
}
console.log(`value of i is ${index}`);
