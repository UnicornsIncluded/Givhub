// const http = require('http');
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const router = express.Router()
// const afpp = express();

module.exports = router

router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()

  twiml.message('Permission to simp granted broffher')

  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString())
})

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });
