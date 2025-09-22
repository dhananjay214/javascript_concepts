///// Filter Method////
const Library = [
  { title: "JavaScript Basics", author: "Sunny", year: 2018 },

  { title: "c++", author: "Prajwal", year: 2017 },
  { title: "database", author: "Chotya", year: 2019 },
  { title: "PYTHON", author: "Mohit", year: 2055 },
  { title: " MACHINE LEARNING", author: "Rohan", year: 2048 },
  { title: " REACTJS", author: "gotya", year: 2028 },
];
const recentBooks = Library.filter((book) => {
  return book.year > 2018; // here 'book' is each object in the array
});

console.log(recentBooks);

////Map Method///
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Num = [10, 20, 30, 50, 60, 70];

const newNums = myNums.map((num) => {
  return num - 10;
});

const newNum = Num.map((nom) => nom * 10).map((nom) => nom + 1);
//.filter(() => num >= 40);

console.log(newNum);
///////////////

const Number = [1, 2, 3, 4, 5];
const myTotal = Number.reduce(function (acc, currval) {
  console.log(`acc:${acc} and carrval:${currval}`);
  return acc + currval;
}, 3);
console.log(myTotal);
