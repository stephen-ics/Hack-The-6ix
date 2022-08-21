const accountSid = "AC7298482e77f590c7c14e4ba28f130c92";
const authToken = "493dcbc352fa9d64ad5d8b8cb574bf38";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     messagingServiceSid: 'AC7298482e77f590c7c14e4ba28f130c92',
     body: 'Stephen',
     mediaUrl: ['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
     to: '+12264553820'
   })
  .then(message => console.log(message.sid));