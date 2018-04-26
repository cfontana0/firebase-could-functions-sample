const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.addFeedback = functions.https.onRequest((req, res) => {
  const text = req.query.text
  const token = req.get('Authorization').split('Bearer ')[1]

  return admin.auth().verifyIdToken(token).then((userInfo) => {
    const userId = userInfo.user_id

    return admin.database().ref('/feedbacks').push({text, userId}).then(() => {
      return res.status(200).send()
    })
  }).catch((err) => res.status(401).send(err))
})

exports.getFeedback = functions.https.onRequest((req, res) => {
  const token = req.get('Authorization').split('Bearer ')[1]

  return admin.auth().verifyIdToken(token).then(() => {
    return admin.database().ref('/feedbacks').on("value", (snapshot) => {
      return res.status(200).send(snapshot.val())
    }, (errorObject) => {
      res.status(409).send(errorObject.code)
    });
  }).catch((err) => res.status(401).send(err))
})
