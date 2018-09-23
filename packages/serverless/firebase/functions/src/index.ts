import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { IUserData, IDiscountData } from "../../../../common/types/User";

admin.initializeApp();
const db = admin.firestore()

export const hydrateNewUser = functions.auth.user().onCreate(user => {
  const identifier: string = user.email || user.displayName;

  const newUserData: IUserData = {
    identifier,
    credits: 0,
    note: "",
    role: "unassigned",
    parentUid: null
  };

  const newUserDiscount: IDiscountData = {
    uid: user.uid,
    name: "-20 Credits",
    description: "-20 Credits",
    type: "whole",
    amount: 20,
    used: false
  };

  return Promise.all([
    db
      .collection("users")
      .doc(user.uid)
      .set(newUserData),
    db.collection("discounts").add(newUserDiscount)
  ]);
});

// export const addDiscount = functions.https.onCall((data, context) => {
//   const { discount }: { discount: IDiscountData} = data;
//   console.log("context", context)
//   return true
// })
