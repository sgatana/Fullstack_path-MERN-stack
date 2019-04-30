const app = require('./start')
const config = require('./config/config')

const PORT = config.port || 5000

app.listen(PORT, error => {
  if (error) {
    console.log('An error occurred', error)
    return
  }
  console.log('application running on port', PORT)
})
