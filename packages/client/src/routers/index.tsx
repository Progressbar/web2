import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AppRouter } from './AppRouter'
import { AdminRouter } from './AdminRouter'

export function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={AdminRouter} />
        <Route path="/" component={AppRouter} />
      </Switch>
    </BrowserRouter>
  )
}
