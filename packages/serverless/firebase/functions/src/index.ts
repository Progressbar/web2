import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { IUserData } from "../../../../common/types/User";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const hydrateUserData = functions.auth.user().onCreate(async user => {
  const newUserData: IUserData = {
    payments: [],
    purchases: [],
    accessLog: [],
    credits: 0,
    note: "",
    role: "unassigned",
    parentId: null
  };

  return await admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set(newUserData);
});
