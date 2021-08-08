const express = require('express');
const app = express()

const userRoutes = require('./users')


app.get('/', (req, res) => {
    res.send('Hello Express!')
})

module.exports = { userRoutes };