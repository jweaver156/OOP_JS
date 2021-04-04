const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const john = new Person('John', 1988);
console.log(john);

// 1. New empty object '()' is created
// 2. Function is called, this = empty object '()' is created
// 3. '()' is linked to a prototype
// 4. Function automatically returns '()'

const matilda = new Person('Matilda', 2012);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
console.log(john instanceof Person);
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

john.calcAge();
matilda.calcAge();

console.log(Person.prototype.isPrototypeOf(john));

Person.prototype.species = 'Homosapiens';

console.log(john);

// Person.prototype
console.log(john.__proto__);
// Object.prototype (top of the prototype chain)
console.log(john.__proto__.__proto__);
// returns null
console.log(john.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
