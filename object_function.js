console.log("=====Here i am practicing object and function in js====");

const student = {
  name: "dhananjay ",
  age: 24,
  address: "pune",
  occupation: "developer",
  contact: {
    phone: 1234567890,
    email: "dhananjay@example.com",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
  },
};
student.age = 25;
console.log(student);
Object.freeze(student); // Prevents any modifications to the object

function studentDetails() {
  let SPhone = 1234567890;
  let SEmail = "dhananjay@example.com";
  let SCollege = "ABC COLLEGE OF ENGINEERING";
  let SCourse = "B.Tech in Computer Science";
  let SYear = 2020;
  let SCity = "Pune";
  let SState = "Maharashtra";
  let SCountry = "India";
  console.log(
    `My name is ${student.name}, my age is ${student.age}, I live in ${student.address} and I am a ${student.occupation}.
    Phone: ${SPhone}, Email: ${SEmail}, College: ${SCollege}, Course: ${SCourse}, Year: ${SYear}, City: ${SCity}, State: ${SState}, Country: ${SCountry}`
  );
}

studentDetails();
console.log("Student contact info:", student.contact);

// ===== Object Example =====
const person = {
  name: "Dhananjay",
  age: 25,
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(person.greet());

// ===== Function Example =====
function add(a, b) {
  return a + b;
}

console.log("Addition:", add(5, 3));

console.log("==========Learnig destructuring in objects=====");
const Course = {
  coursename: "JavaScript",
  duration: "6 months",
  instructor: "Sunny",
  fees: 15000,
};
const { instructor } = Course;
console.log(instructor);
