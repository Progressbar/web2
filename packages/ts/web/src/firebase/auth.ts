import { auth, db, firebase } from "./firebase"

import { IUserData } from "../../../common/types/User"

export const getUserData = async (user: firebase.User): Promise<IUserData> => {
  const newUserDataRaw = await db
    .collection("users")
    .doc(user.uid)
    .get()

  return newUserDataRaw.data()
}

export const doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password)

  if (user) {
    const userData = await getUserData(user)
    console.log("user", user, userData)
  }

  return user
}

export const doSignInWithEmailAndPassword = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password)

export const doSignInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  const { user } = await auth.signInWithPopup(provider)

  if (user) {
    const userData = await getUserData(user)
    console.log("user", user, userData)
  }

  return user
}

export const doSignout = () => auth.signOut()

export const doPasswordReset = (email: string) => auth.sendPasswordResetEmail(email)
