import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { IUserData } from "../../../../common/types/User";

exports.hydrateNewUser = functions.auth.user().onCreate(async user => {
  const newUserData: IUserData = {
    payments: [],
    purchases: [],
    accessLog: [],
    credits: 0,
    note: "",
    role: "unassigned",
    parentId: null
  };

  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set(newUserData);
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
