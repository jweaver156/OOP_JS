const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return `Our ${this.make} is going ${this.speed}mph`;
};

const audi = new Car('Honda', 45);
const bmw = new Car('BMW', 75);

console.log(audi.accelerate());
console.log(audi.brake());
console.log(bmw.accelerate());
console.log(bmw.brake());

console.log(audi.accelerate());
console.log(audi.accelerate());
console.log(audi.accelerate());
console.log(audi.brake());
console.log(audi.brake());
console.log(audi.brake());
console.log(audi.brake());
