import { auth, firebase } from "./firebase"

export const doCreateUserWithEmailAndPassword = (email: string, password: string) =>
  auth.createUserWithEmailAndPassword(email, password)

export const doSignInWithEmailAndPassword = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password)

export const doSignInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  const signinResult = await auth.signInWithPopup(provider)
  console.log("signinResult", signinResult)
}

export const doSignout = () => auth.signOut()

export const doPasswordReset = (email: string) => auth.sendPasswordResetEmail(email)

// export const doPasswordUpdate = (password: string) => auth.currentUser.updatePassword(password)
