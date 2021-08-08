// Import Modules
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors') //Enable cors request
const Sequelize = require('sequelize')

// Import routes
const userRoutes = require('./routes')

const Op  = Sequelize.Op

app.use(cors())
app.use((req, res, next) => {
    req.Op = Op
    next()
});

// Parsing the body of incoming requests
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Static files
app.use(express.static('public'))

// Connect the routes with
app.get('/', (req, res) => {
    res.send('Home page: user app')
})
app.use('/user', userRoutes)


// Listen to port 3000 
app.listen(3000,()=> console.log("server running on http://localhost:3000")); 

module.exports = app