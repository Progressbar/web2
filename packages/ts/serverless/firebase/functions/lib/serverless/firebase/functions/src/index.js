"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const express = require("express");
const cookieParser = require("cookie-parser")();
const cors = require("cors")({ origin: true });
const app = express();
const validateFirebaseIdToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if ((!req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer ")) &&
        !(req.cookies && req.cookies.__session)) {
        res.status(403).send("Unauthorized, no cookie or header");
        return;
    }
    let idToken;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")) {
        // Read the ID Token from the Authorization header.
        idToken = req.headers.authorization.split("Bearer ")[1];
    }
    else if (req.cookies) {
        // Read the ID Token from cookie.
        idToken = req.cookies.__session;
    }
    else {
        // No cookie
        res.status(403).send("Unauthorized, incorrect cookie");
        return;
    }
    try {
        const decodedIdToken = yield admin.auth().verifyIdToken(idToken);
        req.user = decodedIdToken;
        next();
        return;
    }
    catch (error) {
        res.status(403).send("Unauthorized, incorrect token");
        return;
    }
});
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
const v1 = express.Router();
v1.use(cors);
v1.use(cookieParser);
v1.use(validateFirebaseIdToken);
v1.get("/", (req, res) => {
    res.send(`Hello from Progressbar`);
});
v1.get("/hello", (req, res) => {
    res.send(`Hello ${req.user.name}`);
});
app.use('/v1', v1);
// app.use('/', v1)
exports.api = functions.https.onRequest(app);
exports.hydrateNewUser = functions.auth.user().onCreate(user => {
    const identifier = user.email || user.displayName;
    const newUserData = {
        identifier,
        uid: user.uid,
        credits: 0,
        note: "",
        role: "unassigned",
        parentUid: null,
        verifiedByUid: null
    };
    const newUserDiscount = {
        uid: user.uid,
        name: "8 credits discount for being 😎",
        description: "You've received 8 credits discount for joining Progressbar! ❤️ 🌈",
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
//# sourceMappingURL=index.js.map