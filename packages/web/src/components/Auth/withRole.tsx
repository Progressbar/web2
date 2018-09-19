import * as React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { RematchRootState } from '@rematch/core'

import { TUserRole } from '../../../../common/types/User'
import { select, models } from '../../store'

function isAllowed(props: AuthStateProps) {
  const { roles, user } = props

  if (!roles || roles.length === 0) {
    return true
  }

  if (!user) {
    return false
  }

  return roles.includes(user.role)
}

const mapState = (state: RematchRootState<models>, ownProps: AuthStateProps) => ({
  user: select.session.user(state),
})

interface AuthStateProps extends Partial<ReturnType<typeof mapState>> {
  render(result: boolean): JSX.Element
  roles: TUserRole[]
}

const AuthState = connect(mapState)(function AuthState(props: AuthStateProps) {
  return props.render(isAllowed(props))
})

export function withRole(
  roles: TUserRole[],
  allowedElement: JSX.Element,
  notAllowedElement: JSX.Element,
) {
  function render() {
    return (
      <AuthState roles={roles} render={allowed => (allowed ? allowedElement : notAllowedElement)} />
    )
  }

  return allowedElement.type === Route ? (
    <Route path={allowedElement.props.path} render={render} />
  ) : (
    render()
  )
}
