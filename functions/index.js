const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./createUser');
const serviceAccount = require('./serviceAccount.json');
const OTPRequest = require('./OTPRequest');
const verifyOTP = require('./verifyOTP');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "YOUR-DATABASE-URL"
});

exports.createUser = functions.https.onRequest(createUser);
exports.OTPRequest = functions.https.onRequest(OTPRequest);
exports.verifyOTP = functions.https.onRequest(verifyOTP);
