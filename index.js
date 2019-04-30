const app = require('./start')
const config = require('./config/config')

const PORT = config.port || 5000
<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
  const express = require('express')
  const path = require('path')
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
=======

>>>>>>> c7b8f6ad3aa2bc88627c240d77404a728a455ba9
app.listen(PORT, error => {
  if (error) {
    console.log('An error occurred', error)
    return
  }
  console.log('application running on port', PORT)
})
