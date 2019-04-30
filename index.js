const path = require('path')
const app = require('./start')
const config = require('./config/config')

const PORT = config.port || 5000
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.listen(PORT, error => {
  if (error) {
    console.log('An error occurred', error)
    return
  }
  console.log('application running on port', PORT)
})
