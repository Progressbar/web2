import * as functions from "firebase-functions";
import * as admin from "firebase-admin"

import { IUserData } from "../../../../common/types/User";

admin.initializeApp()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const hydrateNewUser = functions.auth.user().onCreate(user => {
  const identifier: string = user.email || user.displayName

  const newUserData: IUserData = {
    identifier,
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
})
