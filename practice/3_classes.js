// class BankAccount {
//     customerName;
//     accountNumber;
//     balance;

//     constructor(customerName, balance){
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount
//     }
    
//     withdraw(amount) {
//         this.balance -= amount
//     }
// }

// const munirAccount = new BankAccount('Munir', 200)
// munirAccount.deposit(200)
// console.log(munirAccount)


/* hello() // hoisting
function hello() {
    console.log('hello')
}
 */

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

const munirAccount = new BankAccount('Munir', 200)
munirAccount.deposit(200)
console.log(munirAccount)