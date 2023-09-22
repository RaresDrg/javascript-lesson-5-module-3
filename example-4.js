/*Example 4 - Complex tasks  //^ cerinta extinsa in exemplul 5 --> //

Write a script for managing a personal account of an Internet bank. There is an 
`account` object in which it is necessary to implement methods for working with 
balance and transaction history.
*/

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  transactionId: 1,   // sa incepe de la 1, nu de la 0, pentru ca incrementarea ++, are loc dupa crearea constantei //

  createTransaction(amount, type) {
    const newTransaction = {
      id: this.transactionId,
      amount: amount, 
      type: type,
    }

    this.transactionId++;
    this.transactions.push(newTransaction);
  },

  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;

    console.log(`Transaction accepted. You deposited the amount of: ${amount}`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`There are not enough funds`);
      return
    }

    // todo: aici mergea sters if-ul // 
    if (amount <= this.balance) {  
      console.log(`Transaction accepted. You withdrew the amount of: ${amount}`);
    }

  this.createTransaction(amount, Transaction.WITHDRAW);
  this.balance -= amount;
  },

  getBalance() {
    console.log(`Your balance is: ${this.balance}`);
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        console.log(`id: ${transaction.id}, amount: ${transaction.amount}, type: ${transaction.type}`);
        // console.log(transaction);
        return
      }
    }  

    console.log(`There is no transaction with the id: "${id}" `)
  }, 
  
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }

    console.log(`Total ${type}: ${total}`)
    return
  },
};

account.getBalance();

account.deposit(500);
account.deposit(1500);
account.getBalance();

account.withdraw(500);
account.getBalance();

account.deposit(3000);
account.getBalance();

account.withdraw(500);
account.withdraw(1500);
account.withdraw(1000);
account.getBalance();

account.getTransactionDetails(3);

account.getTransactionTotal(Transaction.DEPOSIT);
account.getTransactionTotal(Transaction.WITHDRAW);

account.getBalance();