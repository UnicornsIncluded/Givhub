const express = require('express')
const socketio = require('socket.io')
const path = require('path')
const bodyParser = require('body-parser')

require('./config/environment')
require('./database')

const routes = require('./routes/index')
const configPassport = require('./config/passport')

const port = process.env.PORT
const app = express()

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(bodyParser.json())

configPassport(app, express)

app.use('/', routes)

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(port, () =>
    console.log(`Mixing it up on port ${port}`)
  )

  // set up our socket control center
  const io = socketio(server)
  require('./socket')(io)
}

async function bootApp() {
  await startListening()
}

bootApp()
