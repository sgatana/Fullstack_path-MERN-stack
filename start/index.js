const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to Fullstack path Application'
  })
})
module.exports = app