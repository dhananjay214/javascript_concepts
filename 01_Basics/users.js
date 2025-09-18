const users = [
  {
    firstName: "Prajwal",
    lastName: "Dhananjay",
    age: 24,
    email: "prajwal.dhananjay@example.com",
    address: {
      street: "123 Main St",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    subjects: [
      { name: "Mathematics", code: "MATH101", marks: 95 },
      { name: "Physics", code: "PHY101", marks: 90 },
      { name: "Chemistry", code: "CHEM101", marks: 85 },
    ],
  },
  {
    firstName: "Dhananjay",
    lastName: "gawali",
    age: 25,
    email: "dhananjay.gawali@example.com",
    address: {
      street: "456 Market St",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    subjects: [
      { name: "Biology", code: "BIO101", marks: 88 },
      { name: "History", code: "HIST101", marks: 92 },
      { name: "Geography", code: "GEO101", marks: 89 },
    ],
  },

  {
    firstName: "Sanket",
    lastName: "Patil",
    age: 23,
    email: "sanket.patil@example.com",
    address: {
      street: "789 Broadway",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
    subjects: [
      { name: "Mathematics", code: "MATH101", marks: 90 },
      { name: "Physics", code: "PHY101", marks: 85 },
      { name: "Chemistry", code: "CHEM101", marks: 88 },
    ],
    hobbies: [
      { name: "Reading", type: "Indoor" },
      { name: "Cricket", type: "Outdoor" },
      { name: "Cooking", type: "Indoor" },
      { name: "Traveling", type: "Outdoor" },
      { name: "Gaming", type: "Indoor" },
    ],
  },
];

console.log(users.filter((user) => user.address.city === "Pune"));

// let maxAge = 0;

// for (let user of users) {
//   console.log(user.firstName);
//   if (user.age > maxAge) {
//     maxAge = user.age;
//   }
// }
//console.log(users.find((user) => user.age === maxAge).firstName);
// 1 . prajwal
// 24

// 2. dhananjay
// 25

//console.log(users.map((user) => user.email));

//
