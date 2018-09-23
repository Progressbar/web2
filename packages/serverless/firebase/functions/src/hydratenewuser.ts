import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { IUserData } from "../../../../common/types/User";

export const hydrateNewUser = functions.auth.user().onCreate(async user => {
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
