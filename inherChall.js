const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`The ${this.make} now has a speed of ${this.speed}mph`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 50, 75);
const bmw = new EV('BMW', 50, 90);
const audi = new EV('Audi', 95, 100);

EV.prototype.chargeBattery = function () {
  this.charge += 25;
  console.log(`${this.make} has a battery at ${this.charge}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `The ${this.make} is now going ${this.speed}mph and battery now sits at ${this.charge}%`
  );
};
tesla.brake();

tesla.accelerate();
bmw.accelerate();
tesla.accelerate();
audi.accelerate();
audi.chargeBattery();
