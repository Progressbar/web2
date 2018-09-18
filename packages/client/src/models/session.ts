import { createModel } from '@rematch/core'

import { IUser } from '../../../common/types/User'

interface State {
  isAuthenticated: boolean
  user: IUser | null
}

const INITIAL_STATE: State = {
  isAuthenticated: false,
  user: null,
};

const model = {
  state: INITIAL_STATE,
  reducers: {
    reset: () => INITIAL_STATE,
    setIsAuthenticated(state: State, payload: boolean | any) {
      return { ...state, isAuthenticated: payload };
    },
    setUser(state: State, payload: IUser | null | any) {
      return { ...state, user: payload };
    },
  },
  selectors: {
    isAuthenticated: (state: State) => state.isAuthenticated,
    user: (state: State) => state.user,
  },
}



export const session = createModel(model);
