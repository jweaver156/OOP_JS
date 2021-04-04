// * Public fields
// * Private fields
// * Public methods
// * Private methods

class Account {
  // 1. * Defining Public instance field * //
  locale = navigator.language;

  // 2. * Defining Private instance field * //
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // * Protected properties (_) * //
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(
      `Hello ${this.owner}, thank you for signing up! Your account is ready to go using ${this.currency}`
    );
  }

  // 3. * Public methods * //
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(
        `${this.owner}, your loan of ${val} ${this.currency} has been approved and is ready for immediate use.`
      );
      return this;
    }
  }

  // 4. * Private methods (#) * //
  // #approveLoan(val) {
  //   return true;
  //}
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('John', 'USD', 3332);
acc1.deposit(12000);
acc1.requestLoan(12000);
console.log(acc1);
acc1.deposit(300).deposit(2500).requestLoan(25000).withdraw(5000);

const acc2 = new Account('Barry', 'EUR', 3456);
acc2.deposit(3488);
acc2.requestLoan(501);
console.log(acc2);

// * Chaining methods (adding 'return this') * //
acc1.deposit(300).deposit(500).withdraw(35);
console.log(acc1.getMovements());
