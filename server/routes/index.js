const express = require("express");
const path = require("path");
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const accountSid = 'ACa9ba0ed93dc599bfa80caf48e9a6d25a';
const authToken = '78c33c34c9ccb1f851347687113faaa6';
const client = require('twilio')(accountSid, authToken);

const auth = require("./auth");
const user = require("./user");
const users = require("./users");
const todos = require("./todos");
const donor = require("./donor");
const courier = require("./courier");
const sms = require("./sms")

const router = express.Router();

router.use("/api/auth", auth);
router.use("/api/user", user);
router.use("/api/users", users);
router.use("/api/donors", donor);
router.use("/api/couriers", courier);

router.post('/sms', (req, res) => {
  client.messages
  .create({
     body: 'This was sent from a button',
     from: '+17372524728',
     to: '+19293136237'
   })
  .then(message => console.log(message.sid));
  res.sendStatus(201)
});

router.use("/api/todos", todos);

router.get("/api/tags", (req, res) => {
  res.send([
    "MERN",
    "Node",
    "Express",
    "Webpack",
    "React",
    "Redux",
    "Mongoose",
    "Bulma",
    "Fontawesome",
    "Ramda",
    "ESLint",
    "Jest",
    "Enzyme",
  ]);
});

router.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../dist", "index.html"));
});

module.exports = router;
