/**
 * users-service.js
 * Service methods for the users model 
 */
const data = require('../data/data')

module.exports.getUser = function(id) {
    return data.users.find(user => user.id == id)
}


module.exports.updateUserBalance = function (id, amount, increaseBalance ) {
    var indexOfUser = data.users.findIndex(user => user.id == id);
    if(increaseBalance){
       
        data.users[indexOfUser].balance += amount;
    } else {
        data.users[indexOfUser].balance -= amount;
    }
}

module.exports.incrementTransaction = function(senderId) {
    var senderIndex = data.users.findIndex(user => user.id == senderId);
    data.users[senderIndex].numberOfTransactions += 1;
}
