//["","","",""]
//[{},{},{},{}]
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //console.log(num);
}
const greetings = "hello world";
for (const greet of greetings) {
  // console.log(`each char is ${greet}`);
}

//Maps
const map = new Map();

map.set("IN", "India");
console.set("USA", "United state of america");
console.set("Fr", "France");
//console.log(map);

for (const key of map) {
  console.log(key);
}

//////////////////////////

const Library = [
  { title: "JavaScript Basics", author: "Sunny", year: 2018 },

  { title: "c++", author: "Prajwal", year: 2017 },
  { title: "database", author: "Chotya", year: 2019 },
  { title: "PYTHON", author: "Mohit", year: 2055 },
  { title: " MACHINE LEARNING", author: "Rohan", year: 2048 },
  { title: " REACTJS", author: "gotya", year: 2028 },
];
 const recentbooks = Library.filter(book=book.year > 2018)
 console.log(recentbooks);
 