var express = require('express')
var router = express.Router()
var User = require('../models/user')
var data = require('./data/data')

// define middleware 

router.get('/',function(req,res){
    res.status(200).json({users : data.users});
})

router.post('/newUser',function(req,res){
    var name = req.body.name;   
    data.users.push(new User(name));
    res.status(200).json("user created");
})

module.exports = router;