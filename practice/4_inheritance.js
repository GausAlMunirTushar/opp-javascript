const BankAccount = class {
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount
    }
    
    withdraw(amount) {
        this.balance -= amount
    }
}


class CurrentAccount extends BankAccount {
    transationLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName, balance)
    }

    takeBusinessLoan(amount) {
        console.log(`Take business Loan ${amount}`)
    }
}

class SavingAccount extends BankAccount {
    transationLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName, balance)
    }

    personalLoan(amount) {
        console.log(`Take Parsonal Loan ${amount}`)
    }
}



const tusharAccount = new SavingAccount("Munir", 2000)
tusharAccount.deposit(300)
tusharAccount.withdraw(1000)
console.log(tusharAccount)


/* function BankAccount(customerName, balance = 0,) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}


function CurrentAccount(customerName, balance = 0,) {
    BankAccount.call(this, customerName, balance)
    this.transactionLimit  = 5000;
}
const tusharAccount = new CurrentAccount('Tushar', 20)
console.log(tusharAccount)



CurrentAccount.prototype.businessLoan = function (amount) {
    console.log(`Buiness Loan ${amount}`)
}
CurrentAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
CurrentAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}




function SavingAccount(customerName, balance = 0,) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.transactionLimit  = 5000;
}

SavingAccount.prototype.PersonalLoan = function (amount) {
    console.log(`Personal Loan ${amount}`)
}
SavingAccount.prototype = Object.create(BankAccount.prototype)
 */