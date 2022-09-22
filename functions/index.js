const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onUserCreate = functions.firestore
  .document("users/{userId}")
  .onCreate(async (snapshot, context) => {
    const { userId } = context.params;
    console.log(userId, "=====", snapshot.data().email);
});