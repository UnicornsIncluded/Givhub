<<<<<<< HEAD
const accountSid = 'ACa9ba0ed93dc599bfa80caf48e9a6d25a';
const authToken = '78c33c34c9ccb1f851347687113faaa6';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Type YES if you think all women are queens?',
     from: '+17372524728',
     to: '+19419142203'
   })
  .then(message => console.log(message.sid));
=======
const accountSid = 'ACa9ba0ed93dc599bfa80caf48e9a6d25a'
const authToken = '78c33c34c9ccb1f851347687113faaa6'
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: 'Type YES if you think all women are queens?',
    from: '+17372524728',
    to: '+19419142203'
  })
  .then(message => console.log(message.sid))
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
