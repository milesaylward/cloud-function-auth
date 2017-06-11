const admin = require('firebase-admin');

module.exports = function(req, res) {
  //verify a phone was provided
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }
  //format phone to remove dashes and parens (regex matches all non digits)
  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  //create a new user using the given number
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));

}
