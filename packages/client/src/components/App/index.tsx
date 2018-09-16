import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '../../store'
import { MainRouter } from '../../routers'

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading="Loading" persistor={persistor}>
        <MainRouter />
      </PersistGate>
    </Provider>
  )
}
