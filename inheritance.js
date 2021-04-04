const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// * Linking prototypes * //
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `Hello, my name is ${this.firstName}. I am studying ${this.course}`
  );
};

const mike = new Student('Mike', 2002, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
Student.prototype.constructor = Student;
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

const account = {
  owner: 'john',
  movements: [200, 630, 700, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(name, birthyear) {
    this.name = name;
    this.birthYear = birthyear;
  },
};
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 1999;
steven.calcAge();
console.log(steven);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
