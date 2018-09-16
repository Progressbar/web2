import * as React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { select } from '../store'
import { AppLayout } from '../layouts/AppLayout'
import { IsAuthenticated, HasRole } from '../components/Auth'

const mapState = state => ({
  user: select.session.user(state),
})

export const AppRouter = connect(mapState)(function AppRouter(props) {
  return (
    <AppLayout>
      <Switch>
        <IsAuthenticated
          NotAllowed={
            <Redirect to={{ pathname: '/login', state: { referrer: window.location.href } }} />
          }
          Allowed={
            <HasRole
              roles={['admin', 'core', 'host']}
              NotAllowed={<Redirect to={{ pathname: '/you are not allowed here' }} />}
              Allowed={
                <Switch>
                  <Route exact path="/" component={() => <div>Admin Home</div>} />
                </Switch>
              }
            />
          }
        />
      </Switch>
    </AppLayout>
  )
})
