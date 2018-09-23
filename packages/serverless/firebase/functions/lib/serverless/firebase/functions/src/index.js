"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.hydrateNewUser = functions.auth.user().onCreate(user => {
    const identifier = user.email || user.displayName;
    const newUserData = {
        identifier,
        credits: 0,
        note: "",
        role: "unassigned",
        parentUid: null
    };
    const newUserDiscount = {
        uid: user.uid,
        name: "-20 Credits",
        description: "-20 Credits",
        type: "whole",
        amount: 20,
        used: false
    };
    const db = admin.firestore();
    return Promise.all([
        db
            .collection("users")
            .doc(user.uid)
            .set(newUserData),
        db.collection("discounts").add(newUserDiscount)
    ]);
});
exports.addDiscount = functions.https.onCall((data, context) => {
    const { discount } = data;
    console.log("context", context);
    return true;
});
//# sourceMappingURL=index.js.map