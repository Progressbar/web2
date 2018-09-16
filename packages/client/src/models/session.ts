import { createModel } from '@rematch/core'

import { IUser } from '../../../common/types/User'

export type State = {
  isAuthenticated: boolean,
  user: IUser | null,
}

export type Model = {
  state: State,
  reducers: {
    reset(State): State,
    setIsAuthenticated(State, boolean): State,
    setUser(State, TUser): State
  },
  effects: {},
  selectors: {
    isAuthenticated(State): boolean,
    user(State): IUser | null
  }
}

const INITIAL_STATE: State = {
  isAuthenticated: false,
  user: null,
};

export const session: Model = createModel({
  state: INITIAL_STATE,
  reducers: {
    reset: () => INITIAL_STATE,
    setIsAuthenticated(state, payload) {
      return { ...state, isAuthenticated: payload };
    },
    setUser(state, payload) {
      return { ...state, user: payload };
    },
  },
  effects: {},
  selectors: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
  },
});
