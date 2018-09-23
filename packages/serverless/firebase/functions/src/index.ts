import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import { IUserData, IDiscountData } from "../../../../common/types/User";

admin.initializeApp();
const express = require("express");
const cookieParser = require("cookie-parser")();
const cors = require("cors")({ origin: true });
const app = express();

const validateFirebaseIdToken = async (req, res, next) => {
  if (
    (!req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")) &&
    !(req.cookies && req.cookies.__session)
  ) {
    res.status(403).send("Unauthorized, no cookie or header");
    return;
  }

  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else if (req.cookies) {
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send("Unauthorized, incorrect cookie");
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    res.status(403).send("Unauthorized, incorrect token");
    return;
  }
};

// const authenticate = async (req, res, next) => {
//   if (
//     !req.headers.authorization ||
//     !req.headers.authorization.startsWith("Bearer ")
//   ) {
//     res.status(403).send("Unauthorized");
//     return;
//   }
//   const idToken = req.headers.authorization.split("Bearer ")[1];
//   try {
//     const decodedIdToken = await admin.auth().verifyIdToken(idToken);
//     req.user = decodedIdToken;
//     next();
//     return;
//   } catch (e) {
//     res.status(403).send("Unauthorized");
//     return;
//   }
// };
// app.use(cors);
// app.use(cookieParser);
// app.use(authenticate);
// app.use(validateFirebaseIdToken);

const v1 = express.Router()
v1.use(cors)
v1.use(cookieParser)
v1.use(validateFirebaseIdToken)
v1.get("/", (req, res) => {
  res.send(`Hello from Progressbar`);
});
v1.get("/hello", (req, res) => {
  res.send(`Hello ${req.user.name}`);
});
app.use('/v1', v1)
// app.use('/', v1)

export const api = functions.https.onRequest(app);

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

// export const verifyUser = functions.https.onRequest((req, res) => {
// })

// export const addDiscount = functions.https.onCall((data, context) => {
//   const { discount }: { discount: IDiscountData} = data;
//   console.log("context", context)
//   return true
// })
