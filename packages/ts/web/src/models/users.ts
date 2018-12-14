import { createModel, ModelConfig } from "@rematch/core"

import { IUser } from "../../../common/types/User"
import { db } from "../firebase"

interface State {
  users: IUser[]
  fetching: boolean
}

interface Model extends ModelConfig {
  state: State
  reducers: {
    reset(state: State): State
    setAll(state: State, users: IUser[]): State
    startFetching(state: State): State
    stopFetching(state: State): State
  }
  effects: (
    dispatch: any
  ) => {
    fetchAll(): void
  }
  selectors: {
    all(state: State): IUser[]
    isFetching(state: State): boolean
  }
}

const INITIAL_STATE: State = {
  users: [],
  fetching: false,
}

const modelConfig: Model = {
  state: INITIAL_STATE,
  reducers: {
    reset: () => INITIAL_STATE,
    setAll: (state, users) => ({ ...state, users }),
    startFetching: state => ({ ...state, fetching: true }),
    stopFetching: state => ({ ...state, fetching: false }),
  },
  effects: dispatch => ({
    async fetchAll() {
      dispatch.users.startFetching()
      const { docs: rawUsers } = await db.getUsers()
      const users = rawUsers.map(user => user.data())

      console.log("users", users)

      dispatch.users.stopFetching()
    },
  }),
  selectors: {
    isFetching: state => state.fetching,
    all: state => state.users,
  },
}

export const model = createModel(modelConfig)
