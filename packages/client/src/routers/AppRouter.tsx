import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { select } from '@rematch/select'

import { IsAuthenticated } from '../components/Auth'

const mapState = state => ({
  user: select.session.user(state),
})

export const AppRouter = connect(mapState)(function AppRouter(props) {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/presskit" component={Presskit} />
      <Route path="/events" component={Events} />
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
  )
})
