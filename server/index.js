/**
 * index.js 
 */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var usersRouter = require('./routes/users')
var transactionsRouter = require('./routes/transaction')
var cors = require('cors')
const port = 4000;

// define routers 
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', usersRouter)
app.use('/transactions', transactionsRouter)
app.get('/',function(req, res){
    res.status(200).json("Connect sucessful")
})




// listen to port 3000 
app.listen(port, function (){
    console.log(`listening at http://localhost:${port}`);
})