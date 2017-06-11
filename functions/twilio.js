const twilio = require('twilio');
//login to your twilio account and right on load there should be an SID and auth token
//also take this time to navigate to the create phone number menu on the left hand side under the home icon
//and create your new number for outgoing text-messaging 
const accountSid = 'YOUR-TWILIO-INFO';
const authToken = 'YOUR-TWILIO-INFO';

module.exports = new twilio.Twilio(accountSid, authToken);
