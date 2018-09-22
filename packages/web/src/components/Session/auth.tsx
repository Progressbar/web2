import * as React from "react"
import { navigate, RouteComponentProps } from "@reach/router"
import { connect } from "react-redux"
import { RematchRootState } from "@rematch/core"

import { TUserRole } from "../../../../common/types/User"
import { select, models } from "../../store"

function hasSession(props: AuthStateProps) {
  const { user, isAuthenticated } = props

  return user !== null && isAuthenticated === true
}

function hasRole(props: AuthStateProps) {
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
  isAuthenticated: select.session.isAuthenticated(state),
})

interface AuthStateProps extends Partial<ReturnType<typeof mapState>>, RouteComponentProps {
  roles?: TUserRole[]
  component: React.ReactNode
  path: string
}

const AuthStateRenderer = (props: AuthStateProps) => {
  const isOnLoginPage = props.location.pathname === `/app/login`
  const isAuthorized = hasSession(props) && hasRole(props)

  if (!isOnLoginPage && !isAuthorized) {
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

const AuthState = connect(mapState)(AuthStateRenderer)

export interface AuthProps {
  roles?: TUserRole[]
  component: React.ReactNode
  path: string
}

export function Auth(props: AuthProps) {
  return <AuthState roles={props.roles} component={props.component} path={props.path} />
}
