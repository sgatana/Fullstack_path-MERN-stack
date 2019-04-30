require('dotenv').config()

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClietnSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  sessionKey: process.env.SESSSION_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  port: process.env.PORT
}
