const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res) {
  if(!req.body.phone) {
    return res.status(422).send({ error: "Phone number required"});
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin.auth().getUser(phone)
    .then(userRecord => {
      const code = Math.floor((Math.random() * 89999 + 10000));

      twilio.messages.create({
        body: `Your code is ${code}`,
        to: phone,
        from: '+17572385027'
      }, (err) => {
        if (err) { return res.status(422).send(err); }

        admin.database().ref(`users/${phone}`)
          .update({ code: code, codeValid: true }, () => {
            res.send({ success: true })
          });
      })
    })
    .catch(err => {
      res.status(422).send({ error: err })
    });
}
