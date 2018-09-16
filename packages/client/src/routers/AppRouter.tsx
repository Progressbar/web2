import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { RematchRootState } from '@rematch/core'

import { select, models } from '../store'
import { AppLayout } from '../layouts/AppLayout'
import { IsAuthenticated } from '../components/Auth'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { About } from '../pages/About'
import { Presskit } from '../pages/Presskit'
import { Events } from '../pages/Events'
import { Donate } from '../pages/Donate'
import { Cowork } from '../pages/Cowork'
import { Contact } from '../pages/Contact'
import { Purchase } from '../pages/Purchase'
import { Me } from '../pages/Me'
import { Order } from '../pages/Order'

const mapState = (state: RematchRootState<models>) => ({
  user: select.session.user(state),
})

export const AppRouter = connect(mapState)(function AppRouter() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/presskit" component={Presskit} />
        <Route path="/events" component={Events} />
        <Route path="/about" component={About} />
        <Route path="/jobs" component={() => <div>Todo</div>} />
        <Route path="/donate" component={Donate} />
        <Route path="/cowork" component={Cowork} />
        <Route path="/contact" component={Contact} />
        <IsAuthenticated
          NotAllowed={
            <Redirect to={{ pathname: '/login', state: { referrer: window.location.href } }} />
          }
          Allowed={
            <Switch>
              <Route path="/purchase" component={Purchase} />
              <Route path="/me" component={Me} />
              <Route path="/order" component={Order} />
            </Switch>
          }
        />
        <Route exact path="/" component={Home} />
      </Switch>
    </AppLayout>
  )
})
