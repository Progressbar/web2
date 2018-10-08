import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { IUserData, IDiscountData } from "../../../../common/types/User";

admin.initializeApp();

async function authenticate(req, res) {
  const idToken = req.get('Authorization').split('Bearer ')[1];
  const decodedIdToken = await admin.auth().verifyIdToken(idToken);
  req.user = decodedIdToken;

  return () => {
  }
}

export const hydrateNewUser = functions.auth.user().onCreate(user => {
  const identifier: string = user.email || user.displayName;

  const newUserData: IUserData = {
    identifier,
    uid: user.uid,
    credits: 0,
    note: "",
    role: "unassigned",
    parentUid: null,
    verifiedByUid: null
  };

  const newUserDiscount: IDiscountData = {
    uid: user.uid,
    name: "8 credits discount for being 😎",
    description:
      "You've received 8 credits discount for joining Progressbar! ❤️ 🌈",
    type: "whole",
    amount: 8,
    used: false,
    enabled: true
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
