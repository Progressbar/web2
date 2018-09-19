import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { RematchRootState } from '@rematch/core'
import { withRouter, RouteComponentProps } from 'react-router'

import { select, models } from '../store'
import { CoworkLayout } from '../layouts/CoworkLayout'

const mapState = (state: RematchRootState<models>) => ({
  user: select.session.user(state),
})

export interface Props extends RouteComponentProps {
  to: string
  title: string
}

function CoworkRouterRenderer(props: Props) {
  const { match } = props
  const parent = match.url

  return (
    <CoworkLayout>
      <Switch>
        <Route path={`${parent}/how`} component={() => <div>How</div>} />
        <Route path={`${parent}/desks`} component={() => <div>Desks</div>} />
        <Route path={`${parent}/plans`} component={() => <div>Plans</div>} />
        <Route path={`${parent}/amenities`} component={() => <div>Amenities</div>} />
        <Route path={`${parent}/directions`} component={() => <div>Directions</div>} />
        <Route path={`${parent}/nearby`} component={() => <div>Places Around Our Cowork</div>} />
        <Route path={`${parent}/faq`} component={() => <div>Frequently Asked Questions</div>} />
        <Route path={`${parent}`} component={() => <Redirect to={`${parent}/plans`} />} />
      </Switch>
    </CoworkLayout>
  )
}

export const CoworkRouter = connect(mapState)(withRouter(CoworkRouterRenderer))
