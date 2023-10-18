class BankAccount {
  customerName;
  accountNumber;
  #balance;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not valid input");
    }
    this.#balance = amount;
  }
  get balance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  transationLimit = 50000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  #calculateInterest(amount) {
    console.log(`Calculating Interest`)
  }
  takeBusinessLoan(amount) {
    this.#calculateInterest(amount)
    console.log(`Take business Loan ${amount}`);
  }
}

const tusharAccount = new CurrentAccount("Tushar", 2000);
tusharAccount.balance = 300;
tusharAccount.calculateInterest()

// -------------------------------
// - private Properties for convention
