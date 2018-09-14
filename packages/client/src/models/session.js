const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
};

export const model = {
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
};
