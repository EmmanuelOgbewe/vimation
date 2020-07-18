var express = require('express')
var router = express.Router()
var data = require('./data/data')
const Transacion = require('../models/transaction')
const TransactionService = require('./services/transaction-service')

router.get('/', function(req,res){
    res.status(200).json({transactions : data.transactions});
})


router.post('/', function(req,res){
    let from = req.body.from;
    let to = req.body.to; 

    console.log("running post function")

    TransactionService.performTransaction(req.body.amount,from,to)
    .then(result => {
        res.status(200).json({res : `An amount of ${result} was transferred from ${from} to ${to}`});
    })
    .catch(err => {
        res.status(400).json({error : err})
    })
})


module.exports = router