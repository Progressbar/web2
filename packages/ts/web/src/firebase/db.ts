import { db } from "./firebase"

export const getUsers = () => db.collection("users").get()
