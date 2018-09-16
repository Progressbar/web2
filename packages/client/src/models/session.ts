import { createModel } from '@rematch/core'

import { IUser } from '../../../common/types/User'

export type State = {
  isAuthenticated: boolean,
  user: IUser | null,
}

export type Model = {
  state: State,
  reducers: {
    reset(state: State): State,
    setIsAuthenticated(state: State, payload: boolean): State,
    setUser(state: State, payload: IUser): State
  },
  effects: {},
  selectors: {
    isAuthenticated(state: State): boolean,
    user(state: State): IUser | null
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
