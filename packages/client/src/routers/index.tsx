import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AppRouter } from './AppRouter'
import { AdminRouter } from './AdminRouter'
import { CoworkRouter } from './CoworkRouter'
import { AppLayout } from '../layouts/AppLayout'

export function MainRouter() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          <Route path="/admin" component={AdminRouter} />
          <Route path="/cowork" component={CoworkRouter} />
          <Route path="/" component={AppRouter} />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  )
}
