/**
 * User.js
 * Defines the model for user
 */

const { v4: uuidv4 } = require('uuid');

 function User(name, balance=120.00) {
    this.name = name;
    this.id  = uuidv4();
    this.numberOfTransactions = 0;
    this.balance = balance;
    this.accountNumber = uuidv4();
    this.meta = {
        performance : "",
        averageTransactions : 0,
        rating : 100
    }
 }

 module.exports = User;