import { createModel } from "@rematch/core"

// import { IUser } from "../../../common/types/User"
import { auth, db } from "../firebase"

interface IUser {}

interface State {
  user: IUser | null
  accessToken: string | null
}

const INITIAL_STATE: State = {
  user: null,
  accessToken: null
}

export const model = createModel({
  state: INITIAL_STATE,
  reducers: {
    reset: (state: State): State => INITIAL_STATE,
    setUser(state: State, payload: IUser | null): State {
      return { ...state, user: payload }
    },
    setAccessToken(state: State, payload: string | null): State {
      return { ...state, accessToken: payload }
    }
  },
  effects: dispatch => ({
    async signinWithEmailAndPassword(email: string, password: string) {
      const user = await auth.doSignInWithEmailAndPassword(email, password)
      console.log("user", user)
    },
    async signupWithEmailAndPassword(email: string, password: string) {
      const user = await auth.doCreateUserWithEmailAndPassword(email, password)
      console.log("new user", user)
    },
    async signout() {
      const signout = await auth.doSignout()
      console.log("signout", signout)
    },
    async signupWithGoogle() {
      const user = await auth.doSignInWithGoogle()
      console.log("usser", user)
    },
  }),
  selectors: {
    isAuthenticated: (state: State): boolean => !!state.user,
    user: (state: State): IUser | null => state.user,
    accessToken: (state: State): string | null => state.accessToken
  },
})
