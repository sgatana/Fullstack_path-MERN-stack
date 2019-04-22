const express = require('express')
const session = require('cookie-session')
const passport = require('passport')
const mongoose = require('mongoose')
const router = require('./routes')
const { mongoURI, sessionKey } = require('../config/config')

mongoose.connect(mongoURI, { useNewUrlParser: true })

const app = express()
app.use(
  session({
    maxAge: 1 * 24 * 60 * 60 * 1000,
    keys: [sessionKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(router)
module.exports = app
