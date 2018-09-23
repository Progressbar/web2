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
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
exports.hydrateUserData = functions.auth.user().onCreate((user) => __awaiter(this, void 0, void 0, function* () {
    const newUserData = {
        payments: [],
        purchases: [],
        accessLog: [],
        credits: 0,
        note: "",
        role: "unassigned",
        parentId: null
    };
    return yield admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(newUserData);
}));
//# sourceMappingURL=index.js.map