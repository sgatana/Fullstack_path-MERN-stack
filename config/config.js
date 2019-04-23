require('dotenv').config()

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClietnSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    sessionKey: process.env.SESSSION_KEY
  }
} else
  module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID_DEV,
    googleClietnSecret: process.env.GOOGLE_CLIENT_SECRET_DEV,
    mongoURI: process.env.MONGO_URI_DEV,
    sessionKey: process.env.SESSSION_KEY
  }
