/**
 * transaction.js
 * Models a transaction object
 */
const { v4: uuidv4 } = require('uuid');

function Transaction(from,to,amount){
    this.from = from; 
    this.to = to;
    this.amount = amount;
    this.timestamp = Date.now();
    this.id = uuidv4();
    this.meta = {
    }
}
module.exports = Transaction