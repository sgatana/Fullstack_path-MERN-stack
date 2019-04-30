const config = require('../config/config')
const stripe = require('stripe')(config.stripeSecretKey)

module.exports = async token => {
  await stripe.charges.create({
    amount: 500,
    currency: 'USD',
    description: '$5 for 5 credits',
    source: token.id
  })
}
