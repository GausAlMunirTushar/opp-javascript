function BankAccount(customerName, balance = 0,) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    
    this.deposit = function(amount) {
        this.balance += amount;
    }

    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

// const munirAccount = new BankAccount("Munir Tushar", 200)
// const johnAccount = new BankAccount("John Doe",)

// munirAccount.deposit(400)
// johnAccount.deposit(300)
// munirAccount.withdraw(300)
// console.log(munirAccount, johnAccount)



// ------------------------------------------------

const accounts = [];

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');


const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount  ');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value); //+balance.value - string to num
    accounts.push(account);
    console.log(accounts);
})

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((account) => account.accountNumber === +accountNumber.value);
    account.deposit(+amount.value) // string to number
    console.log(accounts)
})