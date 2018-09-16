import * as React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { RematchRootState } from '@rematch/core'

import { select, models } from '../../store'

function isAllowed(props: AuthStateProps) {
  const { user, isAuthenticated } = props

  return user !== null && isAuthenticated === true
}

interface AuthStateProps extends Partial<ReturnType<typeof mapState>> {
  render(result: boolean): JSX.Element
}

const mapState = (state: RematchRootState<models>, ownProps: AuthStateProps) => ({
  isAuthenticated: select.session.isAuthenticated(state),
  user: select.session.user(state),
})

const AuthState = connect(mapState)(function AuthState(props: AuthStateProps) {
  return props.render(isAllowed(props))
})

export function withSession(allowedElement: JSX.Element, notAllowedElement: JSX.Element) {
  function render() {
    return <AuthState render={allowed => (allowed ? allowedElement : notAllowedElement)} />
  }

  return allowedElement.type === Route ? (
    <Route path={allowedElement.props.path} render={render} />
  ) : (
    render()
  )
}
