//  * class expression *
//const PersonCl = class {

//};
///////////////////////////////////////////////
// * ES6 class declaration * //
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // * Methods are added to prototype class *
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hi ${this.fullName}, how are you?`);
  }
  get age() {
    return 2021 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Reddy', 1998);
const john = new PersonCl('John Weaver', 1988);
jessica.calcAge();
console.log(jessica.__proto__);

// PersonCl.prototype.greet = function () {
//   console.log(`Hello, there ${this.firstName}`);
// };
jessica.greet();
john.greet();
// 1. Classes are NOT hoiste
// 2. Classes are first-class citizens
// 3. Classes are executed in 'strict mode'

/////////////////////////////////////////////////
// * ES6 class inheritance (extends keyword) * //
class StudentCL extends PersonCl {
  constructor(fullName, birthYear, course) {
    // * Always needs to happen first * //
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${2020 - this.birthYear} years old but feel more like ${
        2037 - this.birthYear
      }`
    );
  }
}

const mark = new StudentCL('Mark Miller', 1990, 'CS');
mark.introduce();
mark.calcAge();

///////////////////////////////////////////////////
// * Inheritance between class (Object.create) * //

const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(fullName, birthyear) {
    this.fullName = fullName;
    this.birthYear = birthyear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.introduce();
jay.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(
      `Hey ${this.owner}, thank you for signing up! Your account is ready to go using ${this.currency}`
    );
  }

  // * Public interface * //
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(
        `${this.owner}, your loan of ${this.currency}${val} has been approved and is ready for immediate use.`
      );
    }
  }
}
const acc1 = new Account('John', '$', 3332);

acc1.deposit(4575);
acc1.withdraw(345);

console.log(acc1);

acc1.requestLoan(10000);
