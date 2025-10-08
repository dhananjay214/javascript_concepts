// function Student(mark, sub) {
//   let mark = 50;
//   let sub = "math";
//   // console.log(`student mark and subject is ${mark} and ${sub}`);
// }

// function stud(a, b) {
//   let a = 10;
//   let b = 20;
//   let c = a * b;
//   // return a * b;
//   console.log(c);
// }

// const myFunction = new Function("a", "b", "return a *b");
// let x = myFunction(4, 3);
// console.log("myfuction vlaue is " + x);

// function hero(a, b) {
//   return a + b;
// }
// let x = hero(5, 6) + 10;
// console.log(+x);

// let myfuction = (a, b) => a * b;
// let result = myfuction(5, 5);
// console.log(result);

// let document = (d, r) => d - r;
// let store = document(100, 50);
// console.log(+store);

// let x = (1, 2, 4, 5, 7, 85, 4, 3, 2, 2, 1, 4);
// function sumAll() {
//   let sum = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     sum += arguments[index];
//   }
//   return sum;
// }
// console.log(sum);
// function name(params) {}
const person ={
fullname : function() {
  return this.firstname +" " + this.lastname;
  
}
}

const person1 ={
  firstname : "prajwal"
  lastname : "ingale"
}

const person2 ={

  firstname : "rushikesh"
  lastname : "wandhekar"
}
person.fullname.call(person1)
