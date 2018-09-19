import * as React from "react"
import { Provider } from "react-redux"
// @ts-ignore
import { PersistGate } from "redux-persist/es/integration/react"

import { store, persistor } from "./src/store"

export default ({ element }) => (
  <Provider store={store}>
    <PersistGate loading="Loading" persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
)
