// tslint:disable-next-line:no-submodule-imports
import firebase from "firebase/app"
// tslint:disable-next-line:no-submodule-imports
import "firebase/auth"
// tslint:disable-next-line:no-submodule-imports
import "firebase/firestore"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let db: firebase.firestore.Firestore
let auth: firebase.auth.Auth

// Gatsby build will fail otherwise
if (typeof window !== "undefined") {
  auth = firebase.auth()
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

  db = firebase.firestore()
  db.settings({
    timestampsInSnapshots: true,
  })
}

export { db, auth }
