import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Import routers
import { AppRouter } from './AppRouter.tsx'
// import { AdminRouter } from './AdminRouter.tsx'

export function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/admin" component={AdminRouter} /> */}
        <Route path="/" component={AppRouter} />
      </Switch>
    </BrowserRouter>
  )
}
