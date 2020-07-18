const data = require('../data/data')
const userService = require('./user-service')
var Transaction = require('../../models/transaction')

module.exports.validTransaction = function (senderId, amount) {

    const sender = userService.getUser(senderId);
    return sender.balance >= amount;
}

module.exports.performTransaction = function(amount, senderId, recipientId) {
    return new Promise((resolve,reject) => {
        if(this.validTransaction(senderId,amount)){
            userService.updateUserBalance(senderId,amount,false);
            userService.updateUserBalance(recipientId,amount,true);
            userService.incrementTransaction(senderId);
            data.transactions.push(new Transaction(senderId,recipientId,amount))

            setTimeout(resolve,5000,amount); 
        } else {
           
            setTimeout(reject,5000,`Unable to send an amount of ${amount} due to low funds`); 
        }
    })
}