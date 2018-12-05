'use strict'
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Your user ${req.body.email} has been created successfully!`
  })
})
app.listen(process.env.PORT || 8081)
