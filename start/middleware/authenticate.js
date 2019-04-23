const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { googleClientID, googleClietnSecret } = require('../../config/config')

const User = require('../../models/User')

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClietnSecret,
      callbackURL: `${process.env.BASE_URL}/auth/google/callback`
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User.findOne({ googleId: profile.id })
        if (user) return done(null, user)
        const newUser = await User.create({
          googleId: profile.id
        })
        done(null, newUser)
      } catch (error) {
        done(error)
      }
    }
  )
)

module.exports = passport
