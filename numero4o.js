class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is now going ${this.speed} after braking`);
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  batteryCharge() {
    this.#charge += 10;
    console.log(
      `${this.make} after charging has a battery level of ${this.#charge}%`
    );
    return this;
  }

  accelerate() {
    this.speed += 10;
    this.#charge -= 5;
    console.log(
      `${this.make} is now going ${
        this.speed
      } after accelerating decreasing the battery ${this.#charge}%`
    );
    return this;
  }
}
const audi = new EVCl('Audi', 45, 82);
audi.accelerate().batteryCharge();
