const express = require('express')
const passport = require('../middleware/authenticate')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({
    message: 'Welcome to Fullstack path Application'
  })
})
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)
router.get('/auth/google/callback', passport.authenticate('google'))
router.get('/api/user', (req, res) => {
  res.send(req.user)
})
router.get('/api/logout', (req, res) => {
  req.logout()
  res.send({ message: `successfully logged out`})
}) 

module.exports = router