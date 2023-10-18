function BankAccount(customerName, balance = 0,) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

// const munirAccount = new BankAccount('Munir',)
// const johnAccount = new BankAccount('John', 200)
// console.log(munirAccount, johnAccount)
{} // prototype


BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

const munirAccount = new BankAccount('Munir',)
munirAccount.deposit(300)
munirAccount.withdraw(200)


console.log(munirAccount)