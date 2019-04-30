const express = require('express')

const passport = require('../middleware/authenticate')
const router = express.Router()
const paymentController = require('../../controllers/paymentController')

router.get('*', (req, res) => {
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
router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/')
  }
)
router.get('/api/user', (req, res) => {
  res.send(req.user)
})
router.get('/api/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
router.post('/api/payment', async (req, res) => {
  try {
    const {user, body } = req 
    await paymentController(body)
    user.credits += 5
    await user.save()
    res.send(user)
  } catch (error) {
    console.log('an error occured when creating payment', error)
  }
  
})

module.exports = router
