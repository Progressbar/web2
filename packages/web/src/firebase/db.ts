import { db } from "./firebase"

const usersRef = db.collection("users")

export const getUsers = () => usersRef.get()
