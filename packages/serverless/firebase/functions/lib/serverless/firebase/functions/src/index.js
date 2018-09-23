"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.hydrateUserData = functions.auth.user().onCreate(user => {
    const newUserData = {
        payments: [],
        purchases: [],
        accessLog: [],
        credits: 0,
        note: "",
        role: "unassigned",
        parentId: null
    };
    return admin.firestore().collection("users").doc(user.uid).set(newUserData);
});
//# sourceMappingURL=index.js.map