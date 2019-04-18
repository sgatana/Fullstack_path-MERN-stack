const app = require('./start')

const PORT = process.env.PORT || 5000

app.listen(PORT, error => {
  if (error) {
    console.log('An error occurred', error)
    return
  }
  console.log('application running on port', PORT)
})