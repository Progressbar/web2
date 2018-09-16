import * as React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { RematchDispatch, RematchRootState } from '@rematch/core'

import { TUser, TUserRole } from '../../../../common/types/User'

import { select, models } from '../../store'

type AuthStateProps = {
  isAuthenticated: boolean,
  roles: TUserRole[] | null,
  user: TUser | null,
  render(boolean): JSX.Element
}

function isAllowed(props: AuthStateProps) {
  const { roles, user, isAuthenticated } = props

  if (!roles || roles.length === 0) {
    return true
  }

  if (!user || !isAuthenticated) {
    return false
  }

  return roles.includes(user.role)
}

const mapState = (state) => ({
  isAuthenticated: select.session.isAuthenticated(state),
  user: select.session.user(state)
})

const AuthState = connect(mapState)(function AuthState(props: AuthStateProps) {
  return props.render(isAllowed(props))
})
